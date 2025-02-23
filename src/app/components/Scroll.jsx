"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Scroll(props) {
  const { nodes, materials } = useGLTF('/models/scroll.glb')
  const modelRef = useRef(); 

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.02 -0.5;
      modelRef.current.rotation.y += delta * 0.5 ;  
    }
  });

  return (
    <group {...props} dispose={null} ref={modelRef}
    scale={[0.6, 0.6, 1]}
    position={[0.252, 0, 1]}
    rotation={[Math.PI / 14, Math.PI / 8, Math.PI / 8]} 
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.material_0}
        position={[0, 0.188, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.material_0}
        position={[0.313, 0.063, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.material_0}
        position={[0, 0.188, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.material_0}
        position={[0, 0.125, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.material_0}
        position={[0, 0.25, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.material_0}
        position={[0, 0.25, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials.material_0}
        position={[0.063, 0.313, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials.material_1}
        position={[-0.063, 0.188, 0.248]}
      />
    </group>
  )
}

useGLTF.preload('/models/scroll.glb')
