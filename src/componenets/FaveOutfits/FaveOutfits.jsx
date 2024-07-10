import { useState, useEffect } from "react";
import axios from "axios";
import FaveFitsCard from "../FaveFitsCard/FaveFitsCard";
import "./FaveOutfits.scss";

export default function FaveOutfits() {
  const [faveFits, setFaveFits] = useState(null);
  const [error, setError] = useState(null);

  async function fetchFits() {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("User not authenticated");
        return;
      }

      const response = await axios.get(
        "http://localhost:8080/dashboard/outfits",
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      setFaveFits(response.data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch outfits list");
    }
  }

  useEffect(() => {
    fetchFits();
  }, []);

  if (!faveFits) {
    return null;
  }

  return (
    <div className="outfits">
      {faveFits.map((fit, index) => (
        <FaveFitsCard
          key={index}
          top={fit.imageUrls.Tops.ImageURL}
          bottom={fit.imageUrls.Bottoms.ImageURL}
          leftShoe={fit.imageUrls.ShoesLeft.ImageURL}
          rightShoe={fit.imageUrls.ShoesRight.ImageURL}
          title={fit.OutfitName}
          fetchFits={fetchFits}
          outfit={fit}
        />
      ))}
    </div>
  );
}
