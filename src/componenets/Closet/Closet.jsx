import { useState, useEffect } from "react";
import Item from "../Item/Item";
import axios from "axios";
import './Closet.scss'

export default function Closet() {
  const [clothingItems, setClothingItems] = useState(null);
  const [error, setError] = useState(null);

  async function fetchClothing() {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError('User not authenticated')
        return
      }
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/dashboard`, {
        headers: { 
          'x-auth-token': token, 
        },
      });

      setClothingItems(response.data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch random clothing items");
    }
  }

  useEffect(() => {
    fetchClothing()
  }, [])

  if (clothingItems === null) {
    return null;
  }

  return (
    <div className="closet">
      {clothingItems.filter((item) => item.Category !== 'ShoesRight').map((item) => (
        <Item key={item.ClothingID} item={item.ImageURL} title={item.Name} />
      ))}
    </div>
  );
}
