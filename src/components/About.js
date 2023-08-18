import React from "react";
import { Box, useTexture } from "@react-three/drei";

const Photos = () => {
    const photo0 = useTexture("assets/img/photo.jpg");
    const photo1 = useTexture("assets/img/photo1.jpg");
    const photo2 = useTexture("assets/img/photo2.jpg");
    const photo3 = useTexture("assets/img/photo3.jpg");
    const photo4 = useTexture("assets/img/photo4.jpg");

    return (
        <>
            {/* top panel */}
            <Box
                rotation={[0, 0, 0]}
                position={[0, 1.7, 0.8]}
                scale={[1, 1, 0.001]}
            >
                <meshBasicMaterial map={photo0} transparent opacity={0.8} />
            </Box>
            <Box
                rotation={[0, 0, 0]}
                position={[-2, 1.7, 0.8]}
                scale={[1, 1, 0.001]}
            >
                <meshBasicMaterial map={photo1} transparent opacity={0.8} />
            </Box>
            <Box
                rotation={[0, 0, 0]}
                position={[2, 1.7, 0.8]}
                scale={[1, 1, 0.001]}
            >
                <meshBasicMaterial map={photo2} transparent opacity={0.8} />
            </Box>
            <Box
                rotation={[0, 0, 0]}
                position={[4, 1.7, 0.8]}
                scale={[1, 1, 0.001]}
            >
                <meshBasicMaterial map={photo3} transparent opacity={0.8} />
            </Box>
            <Box
                rotation={[0, 0, 0]}
                position={[6, 1.7, 0.8]}
                scale={[1, 1, 0.001]}
            >
                <meshBasicMaterial map={photo4} transparent opacity={0.8} />
            </Box>
        </>
    );
};

const About = () => {
    return (
        <>
            <Photos />
        </>
    );
};

export default About;
