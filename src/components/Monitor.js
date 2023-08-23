import React, { useRef, useEffect } from "react";
import { Box, useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const Monitors = ({ setPersonRot }) => {
  const { camera } = useThree();
  const globeRef = useRef();

  const keyboard = useTexture("assets/keyboard.png");
  const code = useTexture("assets/code.png");
  const stock = useTexture("assets/stock.png");
  const globe = useGLTF("assets/model/globe.glb");

  useEffect(() => {
    setPersonRot([0, 0, 0]);
    camera.position.set(3, 3, -3);
  }, []);

  let angle = 0;
  let isMouseDown = false;
  let lastMouseDown = Date.now();

  window.addEventListener("mousedown", () => {
    isMouseDown = true;
    lastMouseDown = Date.now();
  });
  window.addEventListener("mouseup", () => {
    isMouseDown = false;
  });

  useFrame(() => {
    if (!isMouseDown && Date.now() - lastMouseDown > 15000) {
      angle += 0.007;
      camera.position.x = Math.cos(angle);
      camera.position.z = Math.sin(angle);
      if (globeRef.current) {
        globeRef.current.rotation.y += 0.01;
      }
    }
  });

  return (
    <>
      {/* top panel */}
      <Box
        rotation={[0, 0, 0]}
        position={[0, 1.7, 0.8]}
        scale={[1, 0.5, 0.001]}
      >
        <meshBasicMaterial map={code} transparent opacity={0.8} />
      </Box>
      {/* right panel */}
      <Box
        rotation={[0, -0.3, 0]}
        position={[-0.66, 1.7, 0.75]}
        scale={[0.3, 0.5, 0.001]}
      >
        <meshBasicMaterial map={stock} transparent opacity={0.5} />
      </Box>
      {/* keyboard */}
      <Box
        rotation={[80, 0, 0]}
        position={[0, 1.15, 0.5]}
        scale={[0.55, 0.22, 0.01]}
      >
        <meshBasicMaterial map={keyboard} transparent opacity={0.5} />
      </Box>
      <primitive
        ref={globeRef}
        object={globe.scene}
        position={[-0.5, 1.2, 0.5]}
        scale={[0.2, 0.2, 0.2]}
      />
    </>
  );
};

export default Monitors;
