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
        <div className="w-1/3 h-full bg-[#F5F5DC] bg-opacity-40 p-10 rounded-l-xl rounded-r-xl">
        </div>

        {/* Transparent Vertical Separator (Revealing the Original Background) */}
        <div className="w-[30px] h-full relative">
          <div className="absolute top-0 left-0 w-full h-full rounded-r-xl rounded-l-xl"></div>
        </div>

        {/* Right Section - 2/3 width (Cream Background) */}
        <div className="w-2/3 h-full bg-[#F5F5DC] bg-opacity-90 p-10 rounded-r-xl rounded-l-xl">
          <h1 className="text-3xl">Resume</h1>
        </div>
      </div>
    </main>
  );
}
