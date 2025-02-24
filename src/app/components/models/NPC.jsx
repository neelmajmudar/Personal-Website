"use client";
import React, { useRef, useState, useEffect } from "react";
import { useGLTF, Edges } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRouter } from "next/navigation";

export default function Npc(props) {
  const { nodes, materials } = useGLTF("/models/npc.glb");
  const modelRef = useRef();
  const router = useRouter();
  const {camera, mouse, screen} = useThree();
  const [hovered, setHovered] = useState(false);

  // Ensure the model floats slightly
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.01 - 1.5;
    }
  });

  // Change cursor when hovering
  const { gl } = useThree();
  useEffect(() => {
    gl.domElement.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered, gl.domElement]);

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[2.1, -1.5, 2.26]}
      rotation={[0, -1, 0]}
      scale={0.65}
      onClick = {() => router.push("/contact")}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <group rotation={[-Math.PI, 0, -Math.PI]}>
        {Object.keys(nodes).map((key) => (
          <mesh
            key={key}
            castShadow
            receiveShadow
            geometry={nodes[key]?.geometry} 
            material={materials.material_0}
          >
            {/* Apply white edges when hovered */}
            {hovered && nodes[key]?.geometry && <Edges color="#ffffff" threshold={5} />}
          </mesh>
        ))}
      </group>
    </group>
  );
}
useGLTF.preload("/models/npc.glb");
