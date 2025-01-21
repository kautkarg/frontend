import { useRef, useState } from 'react'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function App() {
  const [count, setCount] = useState(0)
  const gsapRef = useRef();
  useGSAP(()=>{
    gsap.to(".box",{
      x:1000,
      duration:2,
      delay:1
    });
    gsap.to(gsapRef.current,{
      x:500,
      rotate:360,
      scale:3,
      duration:2,
      delay:1
    },{scope:".container"});
  })

  return (
    <>
      <h1 className="box text-3xl font-bold underline">
      Hello world!
      </h1>
      <div className="container">
        <div ref={gsapRef} className="box w-5 h-5 bg-cyan-500">
        </div>
      </div>
    </>
  )
}

export default App
