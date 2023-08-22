import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import Hub from "./components/Hub";
import Person from "./components/Person";
import Floor from "./components/Floor";
import Lights from "./components/Lights";
import Monitors from "./components/Monitor";
import About from "./components/About";

function App() {
  const [targetCord, setTargetCord] = useState([0, 1.5, 0]);
  const [cameraPos, setCameraPos] = useState([-3, 3, -3]);
  const [router, setRouter] = useState("")

  const Routing = () => {
    switch (router) {
      case "ABOUT":
        return <About />;
      default:
        return <Monitors />;
    }
  };

  return (
    <>
      <Hub setNav={(item) => setRouter(item)} />
      <Canvas style={{ width: "100vw", height: "100vh", background: "black" }} camera={{ position: cameraPos }}>
        <OrbitControls target={targetCord} mouseButtons={{ LEFT: THREE.MOUSE.ROTATE, RIGHT: THREE.MOUSE.ROTATE }} />
        <ambientLight intensity={0.8} />
        <Lights />
        {Routing()}
        <Person />
        <Floor />
      </Canvas>
    </>
  );
}

export default App;
