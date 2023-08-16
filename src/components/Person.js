import React from "react";
import { useGLTF } from "@react-three/drei";

const Person = () => {
  const gltf = useGLTF("assets/ds_avatar.glb");

  return <primitive object={gltf.scene} />;
};

export default Person;
