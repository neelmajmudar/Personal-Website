"use client";
import React, { useRef } from "react";
import { useGLTF, Edges } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRouter } from "next/router";

export default function Knight(props) {
  const { nodes, materials } = useGLTF("/models/knight.glb");
  const modelRef = useRef();
  const [hovered, setHovered] = React.useState(false);

  useFrame((state, delta) => {
    console.log(state.clock);
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.02 - 1.5;
    }
  });

  const {gl} = useThree();
  React.useEffect(() => {
    gl.domElement.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered, gl.domElement]);


  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[1.8, -1, 0.4]}
      rotation={[-Math.PI / 2, 0, -1]}
      scale={1.5}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knight_Material001_0.geometry}
        material={materials["Material.001"]}
      >
        {/* Show white edges when hovered */}
        {hovered && <Edges color="#ffffff" threshold={0.5}/>}
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/knight.glb");