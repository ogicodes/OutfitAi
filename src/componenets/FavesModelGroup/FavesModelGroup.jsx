import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import GLBModel from "../GLBModel/GLBModel";

export default function ModelGroup({ top, bottom, leftShoe, rightShoe, shoesPosition }) {
  const groupRef = useRef();
  const bodyGroupRef = useRef();
  const shoesGroupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.006; // Rotate the entire group on the y-axis
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]} scale={[1.5, 1.5, 1.5]}>
      <group ref={bodyGroupRef}>
        {top && (
          <GLBModel
            url={top}
            position={[0, 1.7, 0]}
            scale={[1.2, 1.2, 1.2]}
            rotation={[0, 0, 0]}
          />
        )}
        {bottom && (
          <GLBModel
            url={bottom}
            position={[0, 0, 0]}
            scale={[2, 2, 2]}
            rotation={[0, 0, 0]}
          />
        )}
        <group ref={shoesGroupRef}>
          {leftShoe && (
            <GLBModel
              url={leftShoe}
              position={shoesPosition.left}
              scale={[0.6, 0.6, 0.6]}
              rotation={[0, -1.5, 0]}
            />
          )}
          {rightShoe && (
            <GLBModel
              url={rightShoe}
              position={shoesPosition.right}
              scale={[0.6, 0.6, 0.6]}
              rotation={[0, 1.5, 0]}
            />
          )}
        </group>
      </group>
    </group>
  );
}
