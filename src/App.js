import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, Plane, ScrollControls } from '@react-three/drei';
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';

studio.initialize();
studio.extend(extension);

function RotatingBox() {
  const meshRef = useRef();

  return (
    <Box ref={meshRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
      <meshStandardMaterial attach="material" color="hotpink" />
    </Box>
  );
}

function App() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }} >
      <pointLight />
      <ScrollControls pages={5} damping={1} maxSpeed={0.1} />
      <RotatingBox />
      <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <meshStandardMaterial attach="material" color="white" />
      </Plane>
    </Canvas>
  );
}

export default App;
