import "./App.scss";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomOutfit from "./pages/RandomOutfit/RandomOutfit";
import SavedFits from "./pages/SavedFits/SavedFits";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./componenets/ProtectedRoute/ProtectedRoute";
import { useState } from "react";
import Register from "./pages/Register/Register";
import GenerateOutfit from "./pages/GenerateOutfit/GenerateOutfit";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path='/register' element={<Register setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute user={user} element={<Dashboard />} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/randomfit"
          element={<ProtectedRoute user={user} element={<RandomOutfit />} />}
        />
        <Route
          path="/savedfits"
          element={<ProtectedRoute user={user} element={<SavedFits />} />}
        />
        <Route path="/generate" element={<ProtectedRoute user={user} element={<GenerateOutfit />} />} />
      </Routes>
    </BrowserRouter>
  );
}
