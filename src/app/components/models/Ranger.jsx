"use client"
import React, { useRef, useState } from 'react'
import { useGLTF, Edges} from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export default function Ranger(props) {
  const { nodes, materials } = useGLTF('/models/ranger.glb')
  const modelRef = useRef(); 
  const [hovered , setHovered] = React.useState(false);


  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.02 -0.1;
    }
  });

  const { gl} = useThree();
    React.useEffect(() => {
      gl.domElement.style.cursor = hovered ? "pointer" : "auto";
    }, [hovered, gl.domElement]);

    
  return (
    <group ref={modelRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Material.001']}
        position={[-1.5, -1.4, 1.2]}
        rotation={[-Math.PI / 2, 0, -10.7]}
        scale={1.6}

      />
    </group>
  );
}

useGLTF.preload('/models/ranger.glb');
