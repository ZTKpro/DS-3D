import React from 'react';
import 'aframe';

import Lights from './components/Lights';

import floor from './assets/floor.png'

const AframeScene = () => {
  return (
    <a-scene>
      <Lights />
      <a-light position="0 2 0" />
      <a-box id="box" position="0 1 -17" roughness="1" metalness="1" ></a-box>
      <a-plane id="floor" opacity="0.6" rotation="-90 0 0" width="1000" height="1000" repeat="2000 2000" src={floor} roughness="0" metalness="1" />
      <a-sky color="black"></a-sky>
    </a-scene>
  );
}

export default AframeScene;
