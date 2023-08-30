import React, { useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import Particles from "./Particles";

const About = ({ setPersonRot, router }) => {
  const { camera } = useThree();

  useEffect(() => {
    setPersonRot([0, 3.12, 0]);
    camera.position.set(0, 1.7, -0.5);
  }, []);

  useFrame((state, delta) => {
    if (camera.position.z > -1) {
      camera.position.z -= delta / 3;
    }
  });

  return <>
  <Particles />
  </>;
};

export default About;

// Cześć! Jestem Damian. (Machanie)

// Jestem programistą WEB3 (Hub) z Polski.  (Planeta i polska)

// Jestem miłośnikiem technologii i uwielbiam odkrywać świat technologii. (Wejście wewnatrz technolgicznego planety.)

// Przeszedłem długą drogę rozwijąć się w tym swięcie i odkrywaniu nowych techlogi. (Tunel cząsteczek.)

// W tym czasie nauczyłem się wiele intersujących technologi ale skupiłem się bardziej na WEB3 (Tunel i WEB3 na końcu)

// CzyliA I, Blockchain, 3D, Cyberbezpieczeństwa (Wychodzące z web3 tekstu.)

// i wiele więcej (Całe ekran pokryty technologiami)
