"use client";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Scroll2(props) {
  const { nodes, materials } = useGLTF("/models/scroll.glb");
  const modelRef = useRef();

  // ✅ State to track dragging
  const [isDragging, setIsDragging] = useState(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  // ✅ Floating animation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.6 - 3.5;
    }
  });

  // ✅ Handle mouse events to rotate model
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

    // ✅ Rotate model based on mouse movement
    if (modelRef.current) {
      modelRef.current.rotation.y += deltaX * 0.005; // Horizontal rotation
      modelRef.current.rotation.x += deltaY * 0.005; // Vertical rotation (optional)
    }
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
      {/* ✅ Render all scroll mesh parts */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5?.geometry}
        material={materials.material_0}
        position={[0, 0.188, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7?.geometry}
        material={materials.material_0}
        position={[0.313, 0.063, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9?.geometry}
        material={materials.material_0}
        position={[0, 0.188, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11?.geometry}
        material={materials.material_0}
        position={[0, 0.125, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13?.geometry}
        material={materials.material_0}
        position={[0, 0.25, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15?.geometry}
        material={materials.material_0}
        position={[0, 0.25, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17?.geometry}
        material={materials.material_0}
        position={[0.063, 0.313, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19?.geometry}
        material={materials.material_1}
        position={[-0.063, 0.188, 0.248]}
      />
    </group>
  );
}

useGLTF.preload("/models/scroll.glb");
