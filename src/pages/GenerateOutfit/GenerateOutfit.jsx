import { useState, Suspense } from "react";
import axios from "axios";
import DashHeader from "../../componenets/DashHeader/DashHeader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GenFitGroupedModels from "../../componenets/GenFitGroupedModels/GenFitGroupedModels";
import '../GenerateOutfit/GenerateOutfit.scss'

export default function GenerateOutfit() {
  const [prompt, setPrompt] = useState("");
  const [generatedOutfit, setGeneratedOutfit] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setGeneratedOutfit(null);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8080/generate",
        { prompt },
        {
          headers: { "x-auth-token": token },
        }
      );

      setGeneratedOutfit(response.data);
      console.log(response.data);
    } catch (err) {
      setError("Failed to generate outfit.");
      console.error("Error generating outfit:", err);
    }
  };

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

      const response = await axios.post('http://localhost:8080/randomfit/save', { name, clothingItems }, { headers: { 'x-auth-token': token } })
      alert('outfit saved successfully!')
    } catch (error) {
      alert('Failed to save outfit.')
      console.error('Error saving outfit:', error)
    }
  }

  return (
    <div>
      <DashHeader />
        <div className="gen-outfit">
            <h2 className="gen-outfit__header">Generate Outfit</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form className="gen-outfit__form" onSubmit={handleSubmit}>
                <input
                    className="gen-outfit__input"
                    placeholder="      How can I help make you an outfit?"
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    required
                />
                <button className="gen-outfit__button--submit" type="submit">Generate</button>
            </form>
        </div>
      {generatedOutfit && (
        <div>
          <div className="gen-outfit__section">
            <Canvas className="gen-outfit__canvas">
              <ambientLight intensity={5} />
              <directionalLight position={[5, 5, 5]} />
              <Suspense fallback={null}>
                <GenFitGroupedModels top={generatedOutfit[0].ImageURL} bottom={generatedOutfit[1].ImageURL} left={generatedOutfit[2].ImageURL} right={generatedOutfit[3].ImageURL} />
              </Suspense>
              <OrbitControls />
            </Canvas>
            <button onClick={saveOutfit} className="gen-outfit__button">Save Outfit</button>
          </div>
        </div>
      )}
    </div>
  );
}
