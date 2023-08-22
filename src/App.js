import React, { useEffect, useState } from "react";
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
  const [targetCord, setTargetCord] = useState([0, 1.7, 0]);
  const [personRot, setPersonRot] = useState([0, 0, 0]);
  const [router, setRouter] = useState("");

  const Routing = () => {
    switch (router) {
      case "ABOUT":
        return <About setPersonRot={setPersonRot} />;
      default:
        return (
          <>
            <Monitors setPersonRot={setPersonRot} />
            <Lights />
          </>
        );
    }
  };

  return (
    <>
      <Hub setNav={(item) => setRouter(item)} />
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "black" }}
        camera={{ position: [-3, 3, -3] }}
      >
        <OrbitControls
          target={targetCord}
          mouseButtons={{ LEFT: THREE.MOUSE.ROTATE, RIGHT: THREE.MOUSE.ROTATE }}
        />
        <ambientLight intensity={1} />
        {Routing()}
        <Person rotation={personRot} />
        <Floor />
      </Canvas>
    </>
  );
}

export default App;
