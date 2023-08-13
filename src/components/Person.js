import React from 'react';
import 'aframe';

import Chair from '../assets/gaming_rocker_chair.glb'

const Person = () => {

    return (
        <>
            <a-light target="#Chair" position="0 2 -5" color="red" />
            <a-entity
                id="Chair"
                position="0 1 -5"
                rotation="0 120 0"
                scale="3 3 3"
                roughness="1" metalness="1"
                gltf-model={Chair}
            />
        </>
    );
}

export default Person;
