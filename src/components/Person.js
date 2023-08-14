import React from 'react';
import 'aframe-extras';

const Person = () => {
    return (
        <>
            <a-entity
                id="avatar"
                position="0 0 -5"
                rotation="0 160 0"
                scale="12 12 12"
                fbx-model="url(../assets/avatar.fbx)"
                checkpoint-controls="mode: animate"
            />
        </>
    );
}

export default Person;
