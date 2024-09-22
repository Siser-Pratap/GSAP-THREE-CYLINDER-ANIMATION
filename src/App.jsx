import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./App.css";
import { OrbitControls } from '@react-three/drei';

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <mesh>
        <cylinderGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  )
}

export default App