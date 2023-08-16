import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Person from "./components/Person";
import Floor from "./components/Floor";

function App() {
  return (
    <>
      <Canvas style={{ width: "100vw", height: "100vh", background: "black" }}>
        <OrbitControls />
        <ambientLight intensity={0.8} />
        <pointLight intensity={0.1} position={[0, 0.1, -1]} color="#0696FF" />
        <Person />
        <Floor />
      </Canvas>
    </>
  );
}

export default App;
