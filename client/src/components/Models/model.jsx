// // src/components/Model.jsx
// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';

// export function Model({ modelPath }) {
//   const group = useRef();
//   // Load the GLTF model
//   const { scene, nodes, materials } = useGLTF(modelPath);
  
//   // Apply a slight rotating animation when not being interacted with
//   useFrame((state, delta) => {
//     if (group.current && !state.pointer.down) {
//       group.current.rotation.y += delta * 0.2; // Slow rotation for showcase
//     }
//   });

//   return (
//     <group ref={group} dispose={null} scale={[1, 1, 1]} position={[0, 0, 0]}>
//       <primitive object={scene} />
//     </group>
//   );
// }

// // Preload the model to improve performance
// useGLTF.preload("/models/default_food.glb");