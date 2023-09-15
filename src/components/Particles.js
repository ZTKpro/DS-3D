import { Points, Point, useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function Particles() {
  const pointsRef = useRef();
  let scale = 0.1;
  let posZ = 50;

  const count = 2000;
  const size = 0.1;
  const positionFactor = Math.floor(Math.random() * 1) + 5;

  const particleTexture = useTexture(`assets/img/point.png`);

  useFrame(() => {
    scale += 0.01;

    if (scale <= 1) {
      pointsRef.current.scale.set(scale, scale, scale);
    }

    posZ += 0.1 * -1;
    pointsRef.current.position.set(0, 2, posZ);
  });

  return (
    <Points
      ref={pointsRef}
      scale={[0.1, 0.1, 0.1]}
      position={[0, 2, 50]}
      limit={20000}
    >
      <pointsMaterial
        size={size}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        vertexColors
        map={particleTexture}
        alphaMap={particleTexture}
      />
      {Array.from({ length: count }).map((_, i) => (
        <Point
          key={i}
          position={[
            (0.5 - Math.random()) * positionFactor * 1,
            (0.5 - Math.random()) * positionFactor * 1,
            (0.5 - Math.random()) * positionFactor * 20,
          ]}
          color="#4ef9fe"
        />
      ))}
    </Points>
  );
}

export default Particles;
