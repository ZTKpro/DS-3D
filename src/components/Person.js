import React from "react";
import {
  useGLTF,
} from "@react-three/drei";


const Person = ({ rotation }) => {
  const avatar = useGLTF("assets/model/avatar.glb");

  return <primitive object={avatar.scene} rotation={rotation} />
};

export default Person;
