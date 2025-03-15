import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

function BurgerModel() {
  try {
    const { scene } = useGLTF('/model/burger1.glb');

    useEffect(() => {
      console.log('GLTF Model Loaded:', scene);
    }, [scene]);

    return <primitive object={scene} scale={2} />;
  } catch (error) {
    console.error('Error loading GLTF model:', error);
    return <mesh><boxGeometry /><meshStandardMaterial color="red" /></mesh>; // Show a red box as fallback
  }
}

export default BurgerModel;
