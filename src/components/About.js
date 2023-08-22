import React, { useEffect } from "react";
import { useFrame } from '@react-three/fiber';
import { Box, useTexture } from "@react-three/drei";



const Photos = () => {
    const boxRef1 = React.useRef();
    const boxRef2 = React.useRef();
    const boxRef3 = React.useRef();
    const boxRef4 = React.useRef();
    const boxRef5 = React.useRef();

    const photos = [
        useTexture("assets/img/photo.jpg"),
        useTexture("assets/img/photo1.jpg"),
        useTexture("assets/img/photo2.jpg"),
        useTexture("assets/img/photo3.jpg"),
        useTexture("assets/img/photo4.jpg")
    ];

    const boxRefs = [boxRef1, boxRef2, boxRef3, boxRef4, boxRef5];

    let positions = photos.map(() => [0, 0, 0]);

    let directions = photos.map(() => 1);


    return (
        <>
            {/* top panel */}
            {photos.map((photo, index) => (
                <Box
                    key={index}
                    ref={boxRefs[index]}
                    rotation={[0, 0, 0]}
                    position={[2, 2, 2]}
                    scale={[1, 1, 0.001]}
                >
                    <meshBasicMaterial map={photo} transparent opacity={0.8} />
                </Box>
            ))}
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
