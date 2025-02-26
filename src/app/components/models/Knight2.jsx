"use client";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { AnimationMixer } from "three";

export default function Knight2(props) {
  const { materials } = useGLTF("/models/knight.glb");
  const fbx = useFBX("/models/Knightidle.fbx"); 
  const modelRef = useRef();
  const mixer = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (fbx) {
      mixer.current = new AnimationMixer(fbx);
      const action = mixer.current.clipAction(fbx.animations[0]);
      action.play();

      fbx.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material = materials["Material.001"]; 
        }
      });

      fbx.rotation.set(0, Math.PI, 0);
    }
  }, [fbx, materials]);

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  const handlePointerDown = (event) => {
    setIsDragging(true);
    previousMousePosition.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - previousMousePosition.current.x;
    const deltaY = event.clientY - previousMousePosition.current.y;

    previousMousePosition.current = { x: event.clientX, y: event.clientY };

    modelRef.current.rotation.y += deltaX * 0.005;
    modelRef.current.rotation.x += deltaY * 0.005; 
  };

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      {/* ✅ Render the animated FBX model */}
      <primitive object={fbx} />
    </group>
  );
}

useGLTF.preload("/models/knight.glb");
useFBX.preload("/models/Knightidle.fbx");
