import React, { useEffect } from "react";
import { Box, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Monitors = ({ setPersonRot }) => {
  const { camera } = useThree();

  const keyboard = useTexture("assets/keyboard.png");
  const code = useTexture("assets/code.png");
  const stock = useTexture("assets/stock.png");

  useEffect(() => {
    setPersonRot([0, 0, 0]);
    camera.position.set(3, 3, -3);
  }, []);

  return (
    <>
      <Box
        rotation={[0, 0, 0]}
        position={[0, 1.7, 0.8]}
        scale={[1, 0.5, 0.001]}
      >
        <meshBasicMaterial map={code} transparent opacity={0.8} />
      </Box>
      <Box
        rotation={[0, -0.3, 0]}
        position={[-0.66, 1.7, 0.75]}
        scale={[0.3, 0.5, 0.001]}
      >
        <meshBasicMaterial map={stock} transparent opacity={0.5} />
      </Box>
      <Box
        rotation={[80, 0, 0]}
        position={[0, 1.15, 0.5]}
        scale={[0.55, 0.22, 0.01]}
      >
        <meshBasicMaterial map={keyboard} />
      </Box>
    </>
  );
};

export default Monitors;
