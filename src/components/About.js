import React, { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Box, useTexture } from "@react-three/drei";

const Photos = () => {
  const boxRef1 = React.useRef();
  const boxRef2 = React.useRef();
  const boxRef3 = React.useRef();

  const photos = [
    { texture: useTexture("assets/img/photo0.jpg"), position: [1, 2, 0.5] },
    { texture: useTexture("assets/img/photo1.jpg"), position: [-1, 2, 0.5] },
    { texture: useTexture("assets/img/photo2.jpg"), position: [0, 2.3, 0.5] },
  ];

  const boxRefs = [boxRef1, boxRef2, boxRef3];

  let opacity = 0;
  useFrame((state, delta) => {
    opacity += delta * 0.2;
    if (opacity > 1) opacity = 1;
    boxRefs.forEach((ref) => {
      ref.current.material.opacity = opacity;
    });
  });

  return (
    <>
      {photos.map((photo, index) => (
        <Box
          key={index}
          ref={boxRefs[index]}
          position={photo.position}
          scale={[1, 1, 0.001]}
        >
          <meshBasicMaterial map={photo.texture} transparent opacity={0.8} />
        </Box>
      ))}
    </>
  );
};

const About = ({ setPersonRot, setCameraPos }) => {
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

  return (
    <>
      <Photos />
    </>
  );
};

export default About;
