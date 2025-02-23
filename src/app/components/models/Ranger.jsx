"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Ranger(props) {
  const { nodes, materials } = useGLTF('/models/ranger.glb')

  const modelRef = useRef(); 

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.02 -0.1;
    }
  });

  return (
    <group ref={modelRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Material.001']}
        position={[-1, -1.4, 0.8]}
        rotation={[-Math.PI / 2, 0, -10.7]}
        scale={1.6}
      />
    </group>
  );
}

useGLTF.preload('/models/ranger.glb');
