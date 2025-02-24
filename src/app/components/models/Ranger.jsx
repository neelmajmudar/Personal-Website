"use client";
import React, { useRef, useState } from "react";
import { useGLTF, Edges } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRouter } from "next/navigation";

export default function Ranger(props) {
  const { nodes, materials } = useGLTF("/models/ranger.glb");
  const modelRef = useRef();
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.cos(state.clock.getElapsedTime()) * 0.02 - 0.1;
    }
  });

  const { gl } = useThree();
  React.useEffect(() => {
    gl.domElement.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered, gl.domElement]);

  return (
    <group
      ref={modelRef}
      {...props}
      dispose={null}
      onClick={() => router.push("/about")}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials["Material.001"]}
        position={[-1.5, -1.4, 1.2]}
        rotation={[-Math.PI / 2, 0, -10.7]}
        scale={1.6}
      >
        {/* Show white edges when hovered */}
        {hovered && <Edges color="#ffffff" threshold={1} />}
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/ranger.glb");