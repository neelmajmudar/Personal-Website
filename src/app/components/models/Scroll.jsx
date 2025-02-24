"use client";
import React, { useRef, useState, useEffect } from "react";
import { useGLTF, Edges } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRouter } from "next/router";

export default function Scroll(props) {
  const { nodes, materials } = useGLTF("/models/scroll.glb");
  const modelRef = useRef();
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  // Animate: slight float & rotation
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2 - 0.2;
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  // Change cursor on hover
  const { gl } = useThree();
  useEffect(() => {
    gl.domElement.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered, gl.domElement]);
  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      onclick={() => router.push("")}
      scale={[0.6, 0.6, 1]}
      position={[0.252, 0, 1]}
      rotation={[Math.PI / 14, Math.PI / 8, Math.PI / 8]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5?.geometry}
        material={materials.material_0}
        position={[0, 0.188, 0.313]}
      >
        {/* Apply edges to this mesh */}
        {hovered && <Edges color="#ffffff" threshold={1} />}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7?.geometry}
        material={materials.material_0}
        position={[0.313, 0.063, 0.25]}
      >
        {hovered && <Edges color="#ffffff" threshold={1} />}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9?.geometry}
        material={materials.material_0}
        position={[0, 0.188, 0.313]}
      >
        {hovered && <Edges color="#ffffff" threshold={1} />}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11?.geometry}
        material={materials.material_0}
        position={[0, 0.125, 0.313]}
      >
        {hovered && <Edges color="#ffffff" threshold={1} />}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13?.geometry}
        material={materials.material_0}
        position={[0, 0.25, 0.313]}
      >
        {hovered && <Edges color="#ffffff" threshold={1} />}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15?.geometry}
        material={materials.material_0}
        position={[0, 0.25, 0.313]}
      >
        {hovered && <Edges color="#ffffff" threshold={1} />}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17?.geometry}
        material={materials.material_0}
        position={[0.063, 0.313, 0.313]}
      >
        {hovered && <Edges color="#ffffff" threshold={1} />}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19?.geometry}
        material={materials.material_1}
        position={[-0.063, 0.188, 0.248]}
      >
        {hovered && <Edges color="#ffffff" threshold={1} />}
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/scroll.glb");
