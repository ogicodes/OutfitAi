import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useState, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Box3, Vector3 } from "three";
import axios from "axios";

import FavesModelGroup from "../FavesModelGroup/FavesModelGroup";
import "./FaveFitsCard.scss";

export default function FavefitsCard({
  top,
  bottom,
  leftShoe,
  rightShoe,
  title,
  fetchFits,
  outfit
}) {

  const deleteOutfit = async () => {
    if (window.confirm("Are you sure you want to delete this outfit?")) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/randomfit/delete/${outfit.OutfitID}`,
          {
            headers: { "x-auth-token": token },
          }
        );
        alert("Outfit deleted successfully!");
        fetchFits(); 
      } catch (error) {
        alert("Failed to delete outfit.");
        console.error("Error deleting outfit:", error);
      }
    }
  };

  const [shoesPosition, setShoesPosition] = useState({
    left: [0, 0, 0],
    right: [0, 0, 0],
  });

  // Calculate the shoe positions based on the pants model's bounding box
  useEffect(() => {
    if (bottom) {
      const pantsUrl = bottom;
      const loader = new GLTFLoader();
      loader.load(pantsUrl, (gltf) => {
        const box = new Box3().setFromObject(gltf.scene);
        const size = new Vector3();
        box.getSize(size);
        const min = box.min;
        const max = box.max;
        const center = box.getCenter(new Vector3());

        const shoeHeightOffset = 0.7;
        const shoeWidthOffset = size.x / 1.5;
        const backZPosition = max.z / 2;

        const leftShoePos = new Vector3(
          center.x - shoeWidthOffset,
          min.y - shoeHeightOffset,
          backZPosition
        );
        const rightShoePos = new Vector3(
          center.x + shoeWidthOffset,
          min.y - shoeHeightOffset,
          backZPosition
        );

        setShoesPosition({
          left: [leftShoePos.x, leftShoePos.y, leftShoePos.z],
          right: [rightShoePos.x, rightShoePos.y, rightShoePos.z],
        });
      });
    }
  }, [bottom]);

  if (!top && !bottom && !leftShoe && !rightShoe) {
    return null;
  }

  return (
    <div className="fave-fits">
      <div className="fave-fits__canvas">
        <Canvas>
          <ambientLight intensity={5} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <FavesModelGroup
              top={top}
              bottom={bottom}
              leftShoe={leftShoe}
              rightShoe={rightShoe}
              shoesPosition={shoesPosition}
            />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <h2 className="fave-fits__title">{title}</h2>
      <button onClick={deleteOutfit}>Delete</button>
    </div>
  );
}
