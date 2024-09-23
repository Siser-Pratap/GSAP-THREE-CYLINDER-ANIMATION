import React from 'react'
import * as THREE from 'three';
import Unsplash from './assets';
import { useTexture } from '@react-three/drei';

const Cylinder = () => {

let image =  useTexture(Unsplash);

  return (
    <mesh>
        <cylinderGeometry args={[1.5,1.5,2,30,10,true]} />
        <meshStandardMaterial map={image} side={THREE.DoubleSide}/>
      </mesh>
  )
}

export default Cylinder