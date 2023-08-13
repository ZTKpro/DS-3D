import React from 'react';
import 'aframe';

const Lights = () => {

    const distanceConnect = `-400`

    const getRandomPosition = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const lightConfigurations = Array(30).fill(0).map(() => ({
        position: [getRandomPosition(-500, 500), 100, getRandomPosition(0, 1000 )],
        duration: getRandomPosition(3000, 20000),
        intensity: Math.random() * (0.002 - 0.002) + 0.002,
        color: "#0696FF"
    }));

    return (
        <>
            {lightConfigurations.map((config, index) => (
                <a-light
                    id="dataLights"
                    key={index}
                    color={config.color}
                    position={`${config.position[0]} ${config.position[1]} ${config.position[2]}`}
                    intensity={config.intensity}
                    animation={`property: position; to: 0 150 ${distanceConnect}; dur: ${config.duration}; loop: true; easing: easeInQuad;`}
                    animation__2={`property: intensity; to: 0.001; dur: ${config.duration - 80}; delay: 0; loop: true; easing: linear;`}
                />
            ))}
        </>
    );
}

export default Lights;
