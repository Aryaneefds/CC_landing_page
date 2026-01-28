import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function ChaiVessel() {
    const meshRef = useRef<THREE.Mesh>(null);
    const liquidRef = useRef<THREE.Mesh>(null);

    // Define the profile of a traditional chai glass (latha geometry)
    const points = useMemo(() => {
        const p = [];
        // Simpler shape for visual elegance - Glass Tumbler style
        p.push(new THREE.Vector2(0, 0));
        p.push(new THREE.Vector2(0.5, 0.02)); // Base
        p.push(new THREE.Vector2(0.65, 1.8)); // Top Rim outer
        p.push(new THREE.Vector2(0.6, 1.8)); // Top Rim inner (thickness)
        p.push(new THREE.Vector2(0.45, 0.08)); // Inner base
        p.push(new THREE.Vector2(0, 0.08));
        return p;
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle idle rotation
            meshRef.current.rotation.y += 0.002;
        }
        if (liquidRef.current) {
            // Subtle liquid wobble
            const t = state.clock.getElapsedTime();
            liquidRef.current.rotation.x = Math.sin(t * 0.5) * 0.02;
        }
    });

    return (
        <group position={[0, -0.8, 0]}>
            {/* The Glass/Vessel - using simple transparent material */}
            <mesh ref={meshRef} castShadow receiveShadow>
                <latheGeometry args={[points, 32]} />
                <meshPhysicalMaterial
                    color="#f5f0e8"
                    transparent
                    opacity={0.3}
                    roughness={0.1}
                    metalness={0.1}
                    side={THREE.DoubleSide}
                    envMapIntensity={0.5}
                />
            </mesh>

            {/* The Chai Liquid inside */}
            <mesh ref={liquidRef} position={[0, 0.1, 0]}>
                <cylinderGeometry args={[0.58, 0.43, 1.5, 32]} />
                <meshStandardMaterial
                    color="#C28E5C"
                    roughness={0.3}
                    metalness={0.0}
                    transparent
                    opacity={0.9}
                />
            </mesh>

            {/* Steam effect - simple particles rising */}
            <Steam />
        </group>
    );
}

function Steam() {
    const points = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (points.current) {
            const positions = points.current.geometry.attributes.position;
            const time = state.clock.getElapsedTime();

            for (let i = 0; i < positions.count; i++) {
                let y = positions.getY(i);
                y += 0.01;
                if (y > 3) y = 1.8;
                positions.setY(i, y);

                // Swirl
                const x = Math.sin(time + i * 0.5) * 0.1;
                const z = Math.cos(time + i * 0.5) * 0.1;
                positions.setX(i, x);
                positions.setZ(i, z);
            }
            positions.needsUpdate = true;
        }
    });

    const steamPositions = useMemo(() => {
        const arr = new Float32Array(30 * 3);
        for (let i = 0; i < 30; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 0.3;
            arr[i * 3 + 1] = 1.8 + Math.random() * 1.2;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
        }
        return arr;
    }, []);

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[steamPositions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                color="#ffffff"
                transparent
                opacity={0.4}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
