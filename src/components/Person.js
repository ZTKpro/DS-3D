import React from "react";
import { useGLTF } from "@react-three/drei";

const Person = () => {
  const gltf = useGLTF("assets/pose.glb");
  return <primitive object={gltf.scene} />;
};

export default Person;
