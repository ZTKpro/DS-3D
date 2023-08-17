import React, { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import { useGLTF, Box, Sphere } from "@react-three/drei";

const monitors = [
  { rotation: [0, 10, 0], position: [1, 1.5, 0.7], scale: [1, 0.6, 0.01] },
  { rotation: [0, 0, 0], position: [0, 1.5, 1], scale: [1, 0.6, 0.01] },
  { rotation: [0, -10, 0], position: [-1, 1.5, 0.7], scale: [1, 0.6, 0.01] },
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


const Distanser = () => {
  const ref = useRef()

  useFrame((state) => {
    ref.current.position.x = 1.3 * Math.sin(state.clock.getElapsedTime())
    ref.current.position.z = 1.3 * Math.cos(state.clock.getElapsedTime())
  })
  return <Sphere ref={ref} position={[0, 1.2, -1.2]} scale={[0.01, 0.01, 0.01]}>
    <meshBasicMaterial color="red" />
  </Sphere>
}

const Person = () => {
  const gltf = useGLTF("assets/avatar.glb");

  return (
    <>
      <primitive object={gltf.scene} />
      <Monitors />
      <Distanser />
    </>
  );
};

export default Person;
