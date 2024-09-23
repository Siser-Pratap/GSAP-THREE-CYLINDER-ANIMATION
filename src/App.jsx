import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./App.css";
import { OrbitControls } from '@react-three/drei';
import Cylinder from './Cylinder';
import { Bloom } from '@react-three/postprocessing';
import { EffectComposer } from '@react-three/postprocessing';




const App = () => {
  return (
    <>
    <Canvas className="h-12 w-6" camera={{fov:65}}>
      <OrbitControls />
      <ambientLight />
      <Cylinder />
      {/* <EffectComposer>
          <Bloom
              mipmapBlur // Enables or disables mipmap blur.
              intensity={0.1} // The bloom intensity.
              luminanceThreshold={0.1} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.1} // smoothness of the luminance threshold. Range is [0, 1]
      />
      </EffectComposer> */}
    </Canvas>
    {/* <div className='w-full py-32 h-14 bg-black'>
     <p className='text-white text-[20px]'>Siser Pratap</p>
  </div> */}
    </>
  )
}

export default App