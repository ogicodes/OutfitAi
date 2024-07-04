import { useRef } from 'react';


export default function Lights() {
  const blueLightRef = useRef();
  const pinkLightRef = useRef();
  const purpleLightRef = useRef();

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight ref={blueLightRef} position={[-5, 5, 5]} intensity={200} color="blue" />
      <pointLight ref={pinkLightRef} position={[5, 0, 5]} intensity={200} color="pink" />
      <pointLight ref={purpleLightRef} position={[0, -5, 5]} intensity={200} color="purple" />
    </>
  );
};