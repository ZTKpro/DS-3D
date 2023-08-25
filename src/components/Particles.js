import { Points, Point, useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function Particles() {
  const count = 1000;
  const size = 0.1;
  const positionFactor = Math.floor(Math.random() * 1) + 5;

  const particleTexture = useTexture(`assets/img/point.png`);

  return (
    <Points position={[0, 2, -10]} limit={10000}>
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
            (0.5 - Math.random()) * positionFactor,
            (0.5 - Math.random()) * positionFactor,
            (0.5 - Math.random()) * positionFactor * 3,
          ]}
          color="#4ef9fe"
        />
      ))}
    </Points>
  );
}

export default Particles;
