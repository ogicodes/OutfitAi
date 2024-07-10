import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default function GLBModel({ url, position, scale, rotation, onClick }) {
  const gltf = useLoader(GLTFLoader, url);

  if (!url) {
    return null;
  }

  return (
    <primitive
      object={gltf.scene}
      position={position}
      scale={scale}
      rotation={rotation}
      onClick={onClick}
    />
  );
}
