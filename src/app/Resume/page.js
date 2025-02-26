"use client";
import React from "react";
import Image from "next/image";
import bg from "../../../public/background/pixelbg.png";
import { OrbitControls, SpotLight } from "@react-three/drei";
import Scroll2 from "../components/models/Scroll2";
import { Canvas } from "@react-three/fiber";

export default function ResumePage() {
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
            <Scroll2 rotation={[0, 3.13, 0]} position={[3, -100, -2]} scale={6}/>
          </Canvas>
        </div>
        {/* Transparent Vertical Separator (Revealing the Original Background) */}
        <div className="w-[30px] h-full relative">
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </div>

        {/* Right Section - 2/3 width (Cream Background) */}
        <div className="w-2/3 h-full bg-[#F5F5DC] bg-opacity-90 p-10 rounded-r-xl rounded-l-xl flex flex-col items-center justify-start overflow-y-auto max-h-[100vh]">
          {/* Centered Resume Header */}
          <h1 className="text-6xl font-pixel text-center mt-10 mb-8">Resume</h1>

          {/* Resume Content */}
          <div className="w-4/5">
            {/* Education Section */}
            <h2 className="text-3xl font-pixel mt-6">Education</h2>
            <p className="text-lg mt-2">
              <strong>University of California, Davis – Davis, California</strong><br />
              <em>Bachelor of Science in Computer Science, Economics Minor</em> (Sept. 2023 – Expected June 2026)
            </p>

            {/* Technical Skills Section */}
            <h2 className="text-3xl font-pixel mt-6">Technical Skills</h2>

            {/* Certifications */}
            <h3 className="text-xl font-bold mt-4">Relevant Classes:</h3>
            <p className="text-lg">
              ECS20: Discrete Math, ECS36B: Software Development & Object-Oriented Programming in C++, ECS36C:, Data Structures, Algorithms, & Programming, ECS122A: Algorithm Design and Analysis
            </p>

            {/* Programming Languages */}
            <h3 className="text-xl font-bold mt-4">Programming Languages:</h3>
            <p className="text-lg">
              Python, Java, C++, TypeScript, JavaScript, HTML, CSS
            </p>

            {/* Libraries & Frameworks */}
            <h3 className="text-xl font-bold mt-4">Libraries and Frameworks:</h3>
            <p className="text-lg">
              TensorFlow, Keras, Astropy, PyTorch, Scikit-learn,Tkinter, Py2app, NumPy, Pandas, OpenCV, Mediapipe, Next.js, React, Angular, Vue, Streamlit, LaTeX
            </p>

            {/* Developer Tools */}
            <h3 className="text-xl font-bold mt-4">Developer Tools:</h3>
            <p className="text-lg">
              Git, VS Code, PyCharm, IntelliJ, Anaconda, AWS S3, AWS Cloud, Node.js, Vercel, Android Studio, OpenAI API, Figma, Excel, Docker
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
