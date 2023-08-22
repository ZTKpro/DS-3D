import React from "react";
import {
  useGLTF,
} from "@react-three/drei";


const Person = () => {
  const avatar = useGLTF("assets/model/avatar.glb");

  return <primitive object={avatar.scene} />
};

export default Person;
