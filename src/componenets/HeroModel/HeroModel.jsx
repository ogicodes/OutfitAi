import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import GLBMan from '../../../public/GLman.glb'

export default function HeroModel() {
    const { scene } = useGLTF(GLBMan);
    const ref = useRef();
  
    useFrame(() => {
      ref.current.rotation.y += 0.01;
    });
  
    return (
      <primitive object={scene} ref={ref} scale={33} position={[0, -2.75, 0]} />
    );
  };