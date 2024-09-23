import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./App.css";
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <mesh>
        <cylinderGeometry args={[1.5,1.5,2,30,10,true]} />
        <meshStandardMaterial  side={THREE.DoubleSide}/>
      </mesh>
    </Canvas>
  )
}

export default App