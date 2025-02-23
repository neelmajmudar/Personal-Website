"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Knight(props) {
  const { nodes, materials } = useGLTF('/models/knight.glb');

  const modelRef = useRef()

  useFrame((state, delta, xrframe) => {
    console.log(state.clock)
    modelRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.02 -1.5
  });

  return (
    <group {...props} dispose={null}
    ref={modelRef}
    position={[1.5,-1, 1]}
    rotation={[-Math.PI / 2, 0, -1]}
    scale={1.5}>
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.knight_Material001_0.geometry}
        material={materials['Material.001']}
      />
    </group>
  )
}

useGLTF.preload('/models/knight.glb')
