import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "./i18n";

import RouterContext from "./context/Router";

import Hud from "./components/views/Hud";
import Main from "./components/views/Main";

const SEO = () => {
  return (
    <Helmet>
      <title>DS website</title>
      <meta name="description" content="Damian Szmurło programmer" />
      <meta name="freelancehunt" content="9ff8737d45dfa8d" />
    </Helmet>
  );
};

function App() {
  const [router, setRouter] = useState(null);

  return (
    <RouterContext.Provider value={[router, setRouter]}>
      <SEO />
      <Hud />
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "black" }}
        camera={{ position: [-3, 3, -3] }}
      >
        <Main />
        <ambientLight intensity={1} />
        <OrbitControls
          target={[0, 1.7, 0]}
          mouseButtons={{ LEFT: THREE.MOUSE.ROTATE, RIGHT: THREE.MOUSE.ROTATE }}
        />
      </Canvas>
    </RouterContext.Provider>
  );
}

export default App;
