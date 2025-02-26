"use client";
import React from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";
import bg from "../../../public/background/pixelbg.png";
import Knight2 from "../components/models/Knight2";
import { DirectionalLight } from "three";

export default function ExperiencePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative">
      {/* Background Image */}
      <Image
        src={bg}
        alt="background-image"
        fill
        className="absolute top-0 left-0 w-full h-screen object-cover opacity-20"
      />

      {/* Main Content Container with Cream Background */}
      <div className="relative z-10 w-[95vw] h-[95vh] flex rounded-xl shadow-lg">
        
        {/* Left Section - 1/3 width (Cream Background) */}
        <div className="w-1/3 h-full bg-[#F5F5DC] bg-opacity-40 p-4 flex items-center justify-center rounded-l-xl">
          {/* 3D Knight Model */}
          <Canvas>
            <ambientLight intensity={7} />
            <OrbitControls enableZoom={true} enableRotate={false} maxPolarAngle={Math.PI / 2} maxDistance={500}/>
            <Knight2 rotation={[0, 4, 0]} position={[-5, -100, -350]} scale={2}/>
          </Canvas>
        </div>

        {/* Transparent Vertical Separator (Revealing the Original Background) */}
        <div className="w-[30px] h-full relative">
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </div>

        {/* Right Section - 2/3 width (Cream Background) */}
        <div className="w-2/3 h-full bg-[#F5F5DC] bg-opacity-90 p-10 rounded-r-xl">
          <h1 className="text-3xl text-center">Projects and Experiences</h1>
        </div>
        <div className=""/>
      </div>
    </main>
  );
}