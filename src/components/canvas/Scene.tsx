import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { RoyalEnvironment } from "./RoyalEnvironment.tsx";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { Particles } from "./Particles.tsx";
import * as THREE from "three";
import { Overlay } from "../ui/Overlay.tsx";

function CameraRig() {
    const scroll = useScroll();
    const { camera } = useThree();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const offset = scroll.offset; // 0 to 1

        // Gentle floating motion
        const floatX = Math.sin(t * 0.1) * 0.1;
        const floatY = Math.cos(t * 0.12) * 0.08;

        // Cinematic camera path based on scroll progress
        let targetX = 0;
        let targetY = 0;
        let targetZ = 6;

        if (offset < 0.25) {
            // Opening - gentle approach
            const p = offset / 0.25;
            targetX = 0;
            targetY = 0;
            targetZ = 6 - p * 0.5;
        } else if (offset < 0.5) {
            // Story 1 - orbit left, closer
            const p = (offset - 0.25) / 0.25;
            targetX = Math.sin(p * Math.PI * 0.4) * 2.5;
            targetY = 0.3 + p * 0.3;
            targetZ = 5.5 - p * 0.5;
        } else if (offset < 0.75) {
            // Story 2 - orbit right
            const p = (offset - 0.5) / 0.25;
            targetX = Math.sin((1 - p) * Math.PI * 0.4) * -2.5;
            targetY = 0.6 + p * 0.2;
            targetZ = 5;
        } else {
            // Finale - pull back, majestic
            const p = (offset - 0.75) / 0.25;
            targetX = THREE.MathUtils.lerp(-2.5, 0, p);
            targetY = 0.8 + p * 0.5;
            targetZ = 5 + p * 1.5;
        }

        // Smoothly interpolate camera position
        const targetPos = new THREE.Vector3(targetX + floatX, targetY + floatY, targetZ);
        camera.position.lerp(targetPos, 0.05);
        camera.lookAt(0, 0, 0);
    });

    return null;
}

function Experience() {
    return (
        <>
            <RoyalEnvironment />
            <Particles count={150} />
            <CameraRig />
        </>
    );
}

export function Scene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 38 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: false }}
            style={{ background: "#0F0C0A" }}
        >
            <color attach="background" args={["#0F0C0A"]} />

            <Suspense fallback={null}>
                <ScrollControls pages={5} damping={0.2}>
                    <Experience />

                    <Scroll html style={{ width: "100%" }}>
                        <Overlay />
                    </Scroll>
                </ScrollControls>
            </Suspense>
        </Canvas>
    );
}
