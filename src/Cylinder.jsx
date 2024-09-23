import React from 'react'
import * as THREE from 'three';
import Unsplash from './assets';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Cylinder = () => {

let image =  useTexture(Unsplash);

let cyl = useRef(null);

useFrame((state, delta)=>{
    cyl.current.rotation.y+=delta;
});

  return (
    <group rotation={[0,1.4,0.5]}>
      <mesh ref={cyl}>
          <cylinderGeometry args={[1.5,1.5,2,60,60,true]} />
          <meshStandardMaterial map={image} transparent side={THREE.DoubleSide}/>
      </mesh>
    </group>
  )
}

export default Cylinder