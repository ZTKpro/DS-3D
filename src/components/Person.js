import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useGLTF,
  //  Box, useTexture 
} from "@react-three/drei";

import About from "./About";

// const Monitors = () => {
//   const keyboard = useTexture("assets/keyboard.png");
//   const code = useTexture("assets/code.png");
//   const stock = useTexture("assets/stock.png");

//   return (
//     <>
//       {/* top panel */}
//       <Box
//         rotation={[0, 0, 0]}
//         position={[0, 1.7, 0.8]}
//         scale={[1, 0.5, 0.001]}
//       >
//         <meshBasicMaterial map={code} transparent opacity={0.8} />
//       </Box>
//       {/* right panel */}
//       <Box
//         rotation={[0, -0.3, 0]}
//         position={[-0.66, 1.7, 0.75]}
//         scale={[0.3, 0.5, 0.001]}
//       >
//         <meshBasicMaterial map={stock} transparent opacity={0.5} />
//       </Box>
//       {/* keyboard */}
//       <Box
//         rotation={[80, 0, 0]}
//         position={[0, 1.15, 0.5]}
//         scale={[0.55, 0.22, 0.01]}
//       >
//         <meshBasicMaterial map={keyboard} transparent opacity={0.5} />
//       </Box>
//     </>
//   );
// };

const Person = () => {
  const globeRef = useRef();

  const avatar = useGLTF("assets/model/avatar.glb");
  // const globe = useGLTF("assets/model/globe.glb");

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <About />
      <primitive object={avatar.scene} />
      {/* <primitive
        ref={globeRef}
        object={globe.scene}
        position={[-0.5, 1.2, 0.5]}
        scale={[0.2, 0.2, 0.2]}
      />
      <Monitors /> */}
    </>
  );
};

export default Person;
