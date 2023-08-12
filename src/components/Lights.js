import React from 'react';
import 'aframe';

const Lights = () => {

    const getRandomPosition = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const lightConfigurations = Array(19).fill(0).map(() => ({
        position: [getRandomPosition(-500, 500), 240, getRandomPosition(-500, 500)],
        duration: getRandomPosition(3000, 5000),
        color: "#0696FF"
    }));

    return (
        <>
            {lightConfigurations.map((config, index) => (
                <a-light
                    key={index}
                    color={config.color}
                    position={`${config.position[0]} ${config.position[1]} ${config.position[2]}`}
                    intensity="0.05"
                    type="point"
                    animation={`property: position; to: 0 0.2 -17; dur: ${config.duration}; loop: true; easing: easeOutQuad;`}>
                </a-light>
            ))}
        </>
    );
}

export default Lights;
