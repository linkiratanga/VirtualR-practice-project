import { useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";

export default function App() {
  return (
    <div className="">
      <NavBar />
      <div className="max-w-7xl mx-auto pt-10 px-16">
        <HeroSection />
        <FeatureSection />
      </div>
    </div>
  );
}
