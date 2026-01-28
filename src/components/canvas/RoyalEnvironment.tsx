import { Environment } from "@react-three/drei";

export function RoyalEnvironment() {
    return (
        <>
            {/* Warm ambient light */}
            <ambientLight intensity={0.4} color="#D4AF37" />

            {/* Main spotlight - warm golden */}
            <spotLight
                position={[5, 8, 5]}
                angle={0.5}
                penumbra={1}
                intensity={1.5}
                color="#fff8e7"
            />

            {/* Fill light from the other side */}
            <pointLight position={[-5, 2, -5]} intensity={0.5} color="#E8DEC9" />

            {/* Subtle rim light */}
            <pointLight position={[0, -3, 3]} intensity={0.3} color="#D4AF37" />

            {/* Cinematic Fog */}
            <fog attach="fog" args={["#0F0C0A", 4, 12]} />

            {/* Environment for subtle reflections */}
            <Environment preset="sunset" blur={0.8} />
        </>
    );
}
