import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./App.css";
import { OrbitControls } from '@react-three/drei';
import Cylinder from './Cylinder';



const App = () => {
  return (
    <Canvas camera={{fov:60}}>
      <OrbitControls />
      <ambientLight />
      <Cylinder />
    </Canvas>
  )
}

export default App