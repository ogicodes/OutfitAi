import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GroupedModels from "../../componenets/GroupedModels/Groupedmodels";
import DashHeader from "../../componenets/DashHeader/DashHeader";
import { useState, useEffect, Suspense } from "react";
import '../RandomOutfit/RandomOutfit.scss'
import axios from "axios";


export default function RandomOutfit() {

  const [outfit, setOutfit] = useState(null);
  const [error, setError] = useState(null);

  async function fetchOutfit() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/randomfit`);
      setOutfit(response.data);
      setError(null)
    } catch (error) {
      setError('Failed to fetch random clothing items');
    }
  }

  async function fetchRandomItem(category) {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/randomfit/randomclothing?category=${category}`);
      setOutfit(prevOutfit => ({
        ...prevOutfit,
        [category === 'Tops' ? 'top' : category === 'Bottoms' ? 'bottom' : null]: response.data
      }));
      setError(null)
    } catch (error) {
      setError('Failed to fetch random shirt');
    }
  }

  async function fetchRandomShoes() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/randomfit/randomshoes`);
      setOutfit(prevOutfit => ({
        ...prevOutfit,
        leftShoe: response.data.leftShoe,
        rightShoe: response.data.rightShoe
      }));
      setError(null);
    } catch (error) {
      setError('Failed to fetch random shoes');
    }
  }

  async function saveOutfit() {
    const name = prompt('enter a name for your outfit:')
    if (!name) {
      alert('outfit name is required!')
      return
    }

    const clothingItems = [
      outfit.top?.ClothingID,
      outfit.bottom?.ClothingID,
      outfit.leftShoe?.ClothingID,
      outfit.rightShoe?.ClothingID
    ].filter(Boolean)

    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/randomfit/save`, { name, clothingItems }, { headers: { 'x-auth-token': token } })
      alert('outfit saved successfully!')
    } catch (error) {
      alert('Failed to save outfit.')
      console.error('Error saving outfit:', error)
    }
  }

  useEffect(() => {
    fetchOutfit();
  }, []);


  return (
    <>
    <DashHeader />
    <div className="random-outfit">
      <Canvas>
        <ambientLight intensity={5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <GroupedModels outfit={outfit} fetchRandomItem={fetchRandomItem} fetchRandomShoes={fetchRandomShoes} />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <button onClick={fetchOutfit} className="random-outfit__button">Get New Outfit</button>
      <button onClick={saveOutfit} className="random-outfit__button-save">Save Outfit</button>
    </div>
    </>
  );
}
