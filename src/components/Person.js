import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

const Person = ({ rotation }) => {
  const avatarRef = useRef();

  const avatar = useGLTF("assets/model/avatar.glb");
  const { animations } = useFBX("assets/model/texting.fbx");

  animations[0].name = "Type";

  const { actions } = useAnimations(animations, avatarRef);

  useEffect(() => {
    actions["Type"].reset().play();
  }, []);

  return (
    <primitive ref={avatarRef} object={avatar.scene} rotation={rotation} />
  );
};

export default Person;
