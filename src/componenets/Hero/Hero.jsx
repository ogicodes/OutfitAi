import "./Hero.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import LandingLights from '../LandingLights/LandingLights';
import HeroModel from "../HeroModel/HeroModel";
import Header from "../Header/Header";

export default function Hero() {

  return (
    <div className="hero">
      <Header />
      <Canvas>
        <Environment files={'../../../public/kloppenheim_07_puresky_1k.hdr'} background />
        <LandingLights />
        <HeroModel />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};
