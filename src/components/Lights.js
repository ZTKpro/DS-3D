import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';

const RandNum = (min, max) => {
    return Math.random() * (max - min + 1) + min;
}

const Light = ({ lightParams }) => {
    const lightRef = useRef();
    const speed = RandNum(0.03, 0.1);

    useFrame((state, delta) => {
        const targetPosition = [0, 0.1, 0];
        const epsilon = 0.2;

        const currentPosition = lightRef.current.position;

        currentPosition.x += (targetPosition[0] - currentPosition.x) * speed * delta; 
        currentPosition.z += (targetPosition[2] - currentPosition.z) * speed * delta;

        if (Math.abs(currentPosition.x - targetPosition[0]) < epsilon && Math.abs(currentPosition.z - targetPosition[2]) < epsilon) {
            currentPosition.x = RandNum(-100, 100);
            currentPosition.z = RandNum(-100, 100);
        }
    });


    return <pointLight
        ref={lightRef}
        intensity={lightParams.intensity}
        position={lightParams.position}
        color={lightParams.color} />
};


const Lights = () => {

    const lightsArray = new Array(30).fill(null).map(() => ({
        intensity: 0.1,
        position: [RandNum(-200, 200), 0.1, RandNum(-200, 200)],
        color: "#0696FF"
    }));

    return (
        <>
            {lightsArray.map((lightParams, index) => (
                <Light
                    key={index}
                    lightParams={lightParams}
                />
            ))}
        </>
    );
};

export default Lights;
