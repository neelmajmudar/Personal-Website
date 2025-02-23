"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Wizard(props) {
  const { nodes, materials } = useGLTF('/models/wizard.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.293, 0.903, 0.07]}
        rotation={[-0.417, -0.39, 2.774]}
        scale={[-0.038, 0.146, 0.046]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['white.001']}
        />
      </group>
      <group scale={0.2}
              position={[0.1, -1, 2]}
              rotation={[0, 0, 0]}>

        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials['Material.035']}
          skeleton={nodes.Object_10.skeleton}
          morphTargetDictionary={nodes.Object_10.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_10.morphTargetInfluences}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials['Material.037']}
          skeleton={nodes.Object_11.skeleton}
          morphTargetDictionary={nodes.Object_11.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_11.morphTargetInfluences}
        />
        <skinnedMesh
          name="Object_12"
          geometry={nodes.Object_12.geometry}
          material={materials['Material.036']}
          skeleton={nodes.Object_12.skeleton}
          morphTargetDictionary={nodes.Object_12.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_12.morphTargetInfluences}
        />
        <skinnedMesh
          name="Object_13"
          geometry={nodes.Object_13.geometry}
          material={materials['Material.009']}
          skeleton={nodes.Object_13.skeleton}
          morphTargetDictionary={nodes.Object_13.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_13.morphTargetInfluences}
        />
        <skinnedMesh
          name="Object_14"
          geometry={nodes.Object_14.geometry}
          material={materials['Material.038']}
          skeleton={nodes.Object_14.skeleton}
          morphTargetDictionary={nodes.Object_14.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_14.morphTargetInfluences}
        />
        <skinnedMesh
          name="Object_15"
          geometry={nodes.Object_15.geometry}
          material={materials['Material.039']}
          skeleton={nodes.Object_15.skeleton}
          morphTargetDictionary={nodes.Object_15.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_15.morphTargetInfluences}
        />
        <skinnedMesh
          name="Object_16"
          geometry={nodes.Object_16.geometry}
          material={materials['Material.033']}
          skeleton={nodes.Object_16.skeleton}
          morphTargetDictionary={nodes.Object_16.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_16.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Object_18.geometry}
          material={materials['Material.050']}
          skeleton={nodes.Object_18.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/wizard.glb')
