import "./Hero.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import LandingLights from '../LandingLights/LandingLights';
import HeroModel from "../HeroModel/HeroModel";
import Header from "../Header/Header";
import blueSky from '../../../public/kloppenheim_07_puresky_1k.hdr'

export default function Hero() {

  return (
    <div className="hero">
      <Header />
      <Canvas>
        <Environment files={blueSky} background />
        <LandingLights />
        <HeroModel />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};
