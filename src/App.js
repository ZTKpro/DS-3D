import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import Person from "./components/Person";
import Floor from "./components/Floor";
import Lights from "./components/Lights";

function App() {
  const targetCoordinates = [0, 1.5, 0];


  return (
    <>
      <Canvas style={{ width: "100vw", height: "100vh", background: "black" }} camera={{ position: [0, 4, -3] }}>
        <OrbitControls target={targetCoordinates} mouseButtons={{ LEFT: THREE.MOUSE.ROTATE, RIGHT: THREE.MOUSE.ROTATE }} />
        <ambientLight intensity={0.8} />
        <Lights />
        <Person />
        <Floor />
      </Canvas>
    </>
  );
}

export default App;
