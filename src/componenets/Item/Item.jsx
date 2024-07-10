import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import "../Item/Item.scss";
import ItemGLBModel from "../ItemGLBModel/ItemGLBModel";

export default function Item({ item, title }) {
  
  return (
    <div className="item">
      <Canvas>
        <ambientLight intensity={5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <ItemGLBModel
            url={item}
            position={[0, 0.3, 0]}
            scale={[4.5, 4.5, 4.5]}
            rotation={[0, 0, 0]}
          />
        </Suspense >
        <OrbitControls />
      </Canvas>
      <h2 className="item__title">{title}</h2>
      <p className="item__description">
        Christian Dior long-sleeve button-up shirt. Dark purple 100% cotton and
        features a classic collar. Has a front button closure with white buttons
        and a single pocket on the left chest. The shirt appears to be of a
        formal or semi-formal style, suitable for business or casual wear.
      </p>
    </div>
  );
}
