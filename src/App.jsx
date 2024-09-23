import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./App.css";
import { OrbitControls } from '@react-three/drei';
import Cylinder from './Cylinder';



const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Cylinder />
    </Canvas>
  )
}

export default App