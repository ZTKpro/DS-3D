import React, { useEffect, useRef, useContext } from "react";
import * as THREE from "three";
import {
  useAnimations,
  useFBX,
  useGLTF,
  Plane,
  Box,
  useTexture,
} from "@react-three/drei";

import menu from "../../data/menu";
import RouterContext from "../../context/Router";

import Lights from "../Lights";

const Floor = () => {
  const texture = useTexture("assets/floor.png");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(150, 150);

  return (
    <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial map={texture} metalness={1} roughness={0.2} />
    </Plane>
  );
};

const Monitors = () => {
  const keyboard = useTexture("assets/keyboard.png");
  const code = useTexture("assets/code.png");
  const stock = useTexture("assets/stock.png");

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

const Main = ({ rotation }) => {
  const [router] = useContext(RouterContext);
  const avatarRef = useRef();
  const avatar = useGLTF("assets/model/avatar.glb");

  avatar.scene.children.forEach((element) => {
    if (element.geometry) {
      element.geometry.frustumCulled = false;
    }
  });

  const { animations } = useFBX("assets/model/texting.fbx");
  const { animations: waveAnimations } = useFBX("assets/model/wave.fbx");

  animations[0].name = "Type";
  waveAnimations[0].name = "Wave";

  animations.push(waveAnimations[0]);

  const { actions } = useAnimations(animations, avatarRef);

  useEffect(() => {
    switch (router) {
      case menu.ABOUT:
        actions["Wave"].reset().play();
        break;
      default:
        actions["Type"].reset().play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <>
      {router !== menu.ABOUT && <Monitors />}
      <Lights />
      <directionalLight
        color="red"
        intensity={2}
        position={[-5, 5, 0]}
        target={avatarRef.current}
      />
      <primitive ref={avatarRef} object={avatar.scene} rotation={rotation} />
      <Floor />
    </>
  );
};

export default Main;
