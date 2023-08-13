import React from 'react';
import 'aframe';

import Avatar from '../assets/DS_avatar.glb'

const Person = () => {

    return (
        <>
            <a-light id="avatarLight" target="#avatar" position="0 0 0"  light="target: #avatar; intensity: 1" color="red"></a-light>
            <a-entity
                id="avatar"
                position="0 0 -5"
                rotation="0 160 0"
                scale="1 1 1"
                gltf-model={Avatar}
                roughness="12" metalness="2"
            />
        </>
    );
}

export default Person;
