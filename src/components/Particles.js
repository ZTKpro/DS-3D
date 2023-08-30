import { Points, Point, useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function Particles() {
  const pointsRef = useRef();
  let scale = 0.1;
  const count = 2000;
  const size = 0.1;
  const positionFactor = Math.floor(Math.random() * 1) + 5;

  const particleTexture = useTexture(`assets/img/point.png`);

  useFrame(() => {
    scale += 0.005;
    let posZ = scale * 10 * -1;
    pointsRef.current.position.set(0, 2, posZ);

    if (scale >= 2) return;
    pointsRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Points
      ref={pointsRef}
      scale={[0.1, 0.1, 0.1]}
      position={[0, 2, 0]}
      limit={10000}
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
            (0.5 - Math.random()) * positionFactor * 2,
            (0.5 - Math.random()) * positionFactor * 2,
            (0.5 - Math.random()) * positionFactor * 50,
          ]}
          color="#4ef9fe"
        />
      ))}
    </Points>
  );
}

export default Particles;
