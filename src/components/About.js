import React, { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Box, useTexture } from "@react-three/drei";

import Particles from "./Particles";

const About = ({ setPersonRot, setCameraPos }) => {
  const { camera } = useThree();

  useEffect(() => {
    setPersonRot([0, 3.12, 0]);
    camera.position.set(0, 1.7, -0.5);
  }, []);

  useFrame((state, delta) => {
    // if (camera.position.z > -1) {
    // camera.position.z -= delta / 3;
    camera.position.z -= delta;
    // }
  });

  return <Particles />;
};

export default About;
