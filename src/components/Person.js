import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

const Person = ({ rotation, router }) => {
  const avatarRef = useRef();

  const avatar = useGLTF("assets/model/avatar.glb");
  const { animations } = useFBX("assets/model/texting.fbx");
  const { animations: waveAnimations } = useFBX("assets/model/wave.fbx");

  animations[0].name = "Type";
  waveAnimations[0].name = "Wave";

  animations.push(waveAnimations[0]);

  const { actions } = useAnimations(animations, avatarRef);

  useEffect(() => {
    switch (router) {
      case "ABOUT":
        actions["Wave"].reset().play();
        break;
      default:
        actions["Type"].reset().play();
    }
  }, [router]);

  return (
    <primitive ref={avatarRef} object={avatar.scene} rotation={rotation} />
  );
};

export default Person;
