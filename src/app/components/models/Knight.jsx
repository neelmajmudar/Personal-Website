"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Knight(props) {
  const { nodes, materials } = useGLTF('/models/knight.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.knight_Material001_0.geometry}
        material={materials['Material.001']}
        position={[0.3, -1.4, 2.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.5}
      />
    </group>
  )
}

useGLTF.preload('/models/knight.glb')
