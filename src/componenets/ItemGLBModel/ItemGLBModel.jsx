import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ItemGLBModel( { url, position, scale, rotation }) {
  const gltf = useLoader(GLTFLoader, url);

  if (!url) {
    return null;
  }

  const ref = useRef();
  
  useFrame(() => {
    ref.current.rotation.y += 0.005;
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
}
