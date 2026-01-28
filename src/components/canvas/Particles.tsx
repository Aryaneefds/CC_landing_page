import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface Particle {
    t: number;
    factor: number;
    speed: number;
    x: number;
    y: number;
    z: number;
    originalY: number;
}

export function Particles({ count = 150 }: { count?: number }) {
    const mesh = useRef<THREE.Points>(null);
    const [positions, setPositions] = useState<Float32Array | null>(null);
    const particlesRef = useRef<Particle[]>([]);

    useEffect(() => {
        const p = new Float32Array(count * 3);
        const parts: Particle[] = [];

        for (let i = 0; i < count; i++) {
            // Distribute particles in a sphere around the vessel
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            const r = 2 + Math.random() * 4;

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = (Math.random() - 0.5) * 6;
            const z = r * Math.sin(phi) * Math.sin(theta);

            p[i * 3] = x;
            p[i * 3 + 1] = y;
            p[i * 3 + 2] = z;

            parts.push({
                t: Math.random() * 100,
                factor: Math.random() * 10 + 5,
                speed: Math.random() * 0.005 + 0.002,
                x,
                y,
                z,
                originalY: y,
            });
        }

        particlesRef.current = parts;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPositions(p);
    }, [count]);

    useFrame((state) => {
        if (!mesh.current || !positions) return;

        const time = state.clock.getElapsedTime();
        const positionsAttribute = mesh.current.geometry.getAttribute("position");
        const particles = particlesRef.current;

        for (let i = 0; i < count; i++) {
            const p = particles[i];
            const { t, factor, speed } = p;

            // Gentle rising motion
            let y = p.y + speed;
            if (y > 4) y = -4;
            p.y = y;

            // Orbital swirling motion
            const orbitSpeed = 0.1;
            const newX = p.x * Math.cos(orbitSpeed * 0.01) - p.z * Math.sin(orbitSpeed * 0.01);
            const newZ = p.x * Math.sin(orbitSpeed * 0.01) + p.z * Math.cos(orbitSpeed * 0.01);
            p.x = newX;
            p.z = newZ;

            // Add some turbulence
            const turbX = Math.sin(time * 0.3 + t) * 0.02 * factor * 0.1;
            const turbZ = Math.cos(time * 0.3 + t) * 0.02 * factor * 0.1;

            positionsAttribute.setXYZ(i, newX + turbX, y, newZ + turbZ);
        }
        positionsAttribute.needsUpdate = true;

        // Rotate the whole particle system slowly
        mesh.current.rotation.y = time * 0.02;
    });

    if (!positions) return null;

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                color="#D4AF37"
                transparent
                opacity={0.7}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
