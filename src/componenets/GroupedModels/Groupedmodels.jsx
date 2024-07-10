import { useRef, useEffect, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Box3, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GLBModel from "../GLBModel/GLBModel";

export default function GroupedModels({ outfit, fetchRandomItem, fetchRandomShoes }) {
  const groupRef = useRef();
  const bodyGroupRef = useRef(); // Ref for the top and pants group
  const shoesGroupRef = useRef(); // Ref for the shoes group
  const [shoesPosition, setShoesPosition] = useState({ left: [0, 0, 0], right: [0, 0, 0] });

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Rotate the entire group on the y-axis
    }
  });

  // Calculate the shoe positions based on the pants model's bounding box
  useEffect(() => {
    if (outfit?.bottom) {
      const pantsUrl = outfit.bottom.ImageURL;
      const gltf = useLoader(GLTFLoader, pantsUrl);

      const box = new Box3().setFromObject(gltf.scene);
      const size = new Vector3();
      box.getSize(size);
      const min = box.min;
      const max = box.max;

      const center = box.getCenter(new Vector3());

      const shoeHeightOffset = 0.1; 
      const shoeWidthOffset = size.x / 3; 

      const backZPosition = max.z / 4;


      const leftShoePos = new Vector3(center.x - shoeWidthOffset, min.y - shoeHeightOffset, backZPosition);
      const rightShoePos = new Vector3(center.x + shoeWidthOffset, min.y - shoeHeightOffset, backZPosition);

      setShoesPosition({
        left: [leftShoePos.x, leftShoePos.y, leftShoePos.z],
        right: [rightShoePos.x, rightShoePos.y, rightShoePos.z]
      });
    }
  }, [outfit?.bottom]);

  if (!outfit) {
    return null;
  }

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <group ref={bodyGroupRef}>
        {outfit.top && (
          <GLBModel
            key="tops"
            url={outfit.top.ImageURL}
            position={[0.02, 1.7, 0]}
            scale={[1.4, 1.4, 1.4]}
            rotation={[0.1, 0, 0]}
            onClick={() => fetchRandomItem('Tops')}
          />
        )}
        {outfit.bottom && (
          <GLBModel
            key="bottoms"
            url={outfit.bottom.ImageURL}
            position={[0, 0, -0.1]}
            scale={[2, 2, 2]}
            rotation={[0, 0, 0]}
            onClick={() => fetchRandomItem('Bottoms')}
          />
        )}
        <group ref={shoesGroupRef}>
          {outfit.leftShoe && (
            <GLBModel
              key="left-shoe"
              url={outfit.leftShoe.ImageURL}
              position={shoesPosition.left}
              scale={[0.6, 0.6, 0.6]}
              rotation={[0, -1.5, 0]}
              onClick={fetchRandomShoes}
            />
          )}
          {outfit.rightShoe && (
            <GLBModel
              key="right-shoe"
              url={outfit.rightShoe.ImageURL}
              position={shoesPosition.right}
              scale={[0.6, 0.6, 0.6]}
              rotation={[0, 1.5, 0]}
              onClick={fetchRandomShoes}
            />
          )}
        </group>
      </group>
    </group>
  );
}
