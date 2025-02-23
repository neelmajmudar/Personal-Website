"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { Environment } from "@react-three/drei";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas className={clsx("w-screen h-screen relative z-10", className)}>
      <Suspense fallback={null}>
        <group> {/* Ensures a single parent element */}
          {children}
        </group>
      </Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;