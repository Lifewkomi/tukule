import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

function BurgerModel() {
  try {
    const { scene } = useGLTF('/models/Doughnut.glb');

    useEffect(() => {
      console.log('GLTF Model Loaded:', scene);
    }, [scene]);

    if (!scene) {
      console.warn("Scene not found in GLTF file!");
      return null;
    }

    return <primitive object={scene} scale={5} position={[0, -1, 0]} />;;
  } catch (error) {
    console.error('Error loading GLTF model:, NOW RETURNING RED CUBE', error);
    return <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>; // Show red cube if burger fails
  }
}

export default BurgerModel;

