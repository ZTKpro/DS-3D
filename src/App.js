import React from 'react';
import 'aframe';

import floor from './assets/floor.png'
import Lights from './components/Lights';
import Person from './components/Person';


const AframeScene = () => {
  return (
    <a-scene>
      <Lights />
      <Person />
      <a-light id="main" target="#Chair" position="0 2 0"/>
      <a-plane id="floor" rotation="-90 0 0" width="1000" height="1000" repeat="2000 2000" src={floor} roughness="0.1" metalness="1" />
      <a-sky color="black"></a-sky>
    </a-scene>
  );
}

export default AframeScene;
