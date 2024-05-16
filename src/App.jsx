import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Canvas} from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Model from '../public/Scene'
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{background:"black"}}>
    <Canvas style={{color:"red"}}>
    
    <ambientLight color={"green"} intensity={0.5} />
    <OrbitControls/>
     <Suspense fallback={null}>
     <Model/>
     </Suspense>
     <Environment preset='sunset'/>
    </Canvas>
    </div>
  
    </>
  )
}

export default App
