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
        {/* <Environment files={'../../../public/nebula.hdr'} background /> */}
        <Environment preset="forest" background backgroundBlurriness={0.5} />
        <LandingLights />
        <HeroModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};
