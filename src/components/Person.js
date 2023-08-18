import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import { useGLTF, Box, Sphere } from "@react-three/drei";

const monitors = [
  { rotation: [0, 0, 0], position: [0.5, 1.8, 1], scale: [1, 0.5, 0.01] },
  { rotation: [0, 0, 0], position: [-0.51, 1.8, 1], scale: [1, 0.5, 0.01] },
  { rotation: [0, 0, 0], position: [0, 1.39, 1], scale: [1, 0.3, 0.01] },
  { rotation: [0, 0, 0], position: [-0.76, 1.39, 1], scale: [0.5, 0.3, 0.01] },
  { rotation: [0, 0, 0], position: [0.75, 1.39, 1], scale: [0.49, 0.3, 0.01] },
];

const Monitors = () => {
  return (
    <>
      {monitors.map((monitor) => (
        <Box
          key={monitor.position.join(",")}
          rotation={monitor.rotation}
          position={monitor.position}
          scale={monitor.scale}
        >
          <meshBasicMaterial color="#0696FF" transparent opacity={0.5} />
        </Box>
      ))}
    </>
  );
};

const Person = () => {
  const globeRef = useRef();

  const gltf = useGLTF("assets/avatar.glb");
  const globe = useGLTF("assets/globe.glb");

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <primitive object={gltf.scene} />
      <primitive ref={globeRef} object={globe.scene} position={[-0.5, 1.2, 0.5]} scale={[0.2, 0.2, 0.2]} />
      <Monitors />
    </>
  );
};

export default Person;
