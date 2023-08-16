import React from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { Plane } from "@react-three/drei";

const Floor = () => {
  const texture = useTexture("assets/floor.png");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(150, 150);

  return (
    <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial map={texture} metalness={0.7} roughness={0.6} />
    </Plane>
  );
};

export default Floor;
