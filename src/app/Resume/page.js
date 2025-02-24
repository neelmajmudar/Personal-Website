"use client";
import React from "react";
import Image from "next/image";
import bg from "../../../public/background/pixelbg.png";

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
        <div className="w-1/3 h-full bg-[#F5F5DC] bg-opacity-40 p-10 rounded-r-xl rounded-l-xl">
        </div>

        {/* Transparent Vertical Separator (Revealing the Original Background) */}
        <div className="w-[30px] h-full relative">
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </div>

        {/* Right Section - 2/3 width (Cream Background) */}
        <div className="w-2/3 h-full bg-[#F5F5DC] bg-opacity-90 p-10 rounded-r-xl rounded-l-xl flex flex-col items-center justify-start">
          {/* Centered Resume Header */}
          <h1 className="text-6xl font-pixel text-center mt-10 mb-8">Resume</h1>

          {/* Resume Content */}
          <div className="w-4/5">
            {/* Education Section */}
            <h2 className="text-3xl font-pixel mt-6">Education</h2>
            <p className="text-lg mt-2">
              <strong>University of California, Davis – Davis, California</strong><br />
              <em>Bachelor of Science in Computational Cognitive Science</em> (Sept. 2023 – Expected June 2027)
            </p>

            {/* Technical Skills Section */}
            <h2 className="text-3xl font-pixel mt-6">Technical Skills</h2>

            {/* Certifications */}
            <h3 className="text-xl font-bold mt-4">Certifications:</h3>
            <p className="text-lg">
              Codeacademy Learn Data Structures and Algorithms, Codeacademy Intro to Machine Learning
            </p>

            {/* Programming Languages */}
            <h3 className="text-xl font-bold mt-4">Programming Languages:</h3>
            <p className="text-lg">
              Python, Kotlin, Java, C, C++, TypeScript, JavaScript, HTML, CSS
            </p>

            {/* Libraries & Frameworks */}
            <h3 className="text-xl font-bold mt-4">Libraries and Frameworks:</h3>
            <p className="text-lg">
              TensorFlow, Keras, PyTorch, Scikit-learn, NumPy, Pandas, OpenCV, Mediapipe, Next.js, React, Streamlit, LaTeX
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
