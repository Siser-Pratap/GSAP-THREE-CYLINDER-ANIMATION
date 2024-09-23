import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./App.css";
import { OrbitControls } from '@react-three/drei';
import Cylinder from './Cylinder';
import { Bloom } from '@react-three/postprocessing';
import { EffectComposer } from '@react-three/postprocessing';



const App = () => {
  return (
    <Canvas flat camera={{fov:60}}>
      <OrbitControls />
      <ambientLight />
      <Cylinder />
      <EffectComposer>
          <Bloom
              mipmapBlur // Enables or disables mipmap blur.
              intensity={13.0} // The bloom intensity.
              luminanceThreshold={0.1} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.1} // smoothness of the luminance threshold. Range is [0, 1]
      />
      </EffectComposer>
    </Canvas>
  )
}

export default App