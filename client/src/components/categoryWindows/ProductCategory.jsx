// // src/components/ProductWrap3DWindow.jsx
// import React, { Suspense, useRef } from 'react';
// import { motion } from 'framer-motion';
// import styled from 'styled-components';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { OrbitControls, Environment, PresentationControls } from '@react-three/drei';
// import { Model } from '../Models/model'; 

// const ProductWrapContainer = styled(motion.div)`
//   position: absolute;
//   top: 0;
//   left: calc(96px + 15vw + 15vw + 3rem); /* Sidebar + main category + sub-category + spacing */
//   width: calc(100vw - (96px + 15vw + 15vw + 3rem));
//   height: 100vh;
//   background: rgba(255, 255, 255, 0.9);
//   backdrop-filter: blur(10px);
//   transition: all 200ms ease-out;
//   z-index: 10;
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
  
//   @media (max-width: 768px) {
//     position: fixed;
//     left: 0;
//     top: 0;
//     width: 100vw;
//     height: 100vh;
//     padding: 1rem;
//   }
// `;

// const ProductInfo = styled.div`
//   margin-bottom: 1rem;
  
//   h2 {
//     font-size: 1.8rem;
//     font-weight: 600;
//     margin-bottom: 0.5rem;
//   }
  
//   p {
//     font-size: 1rem;
//     color: #666;
//     max-width: 600px;
//   }
// `;

// const ModelContainer = styled.div`
//   flex: 1;
//   width: 100%;
//   background: #f8f8f8;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
// `;

// const LoadingSpinner = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   color: #777;
//   font-size: 1.2rem;
// `;

// // Instructions component that appears briefly
// const Instructions = () => {
//   const { camera } = useThree();
//   const ref = useRef();
  
//   useFrame(() => {
//     if (ref.current) {
//       ref.current.opacity -= 0.01;
//       if (ref.current.opacity < 0) {
//         ref.current.opacity = 0;
//       }
//     }
//   });

//   return (
//     <sprite position={[0, 0, -5]} scale={[2, 1, 1]}>
//       <spriteMaterial ref={ref} transparent opacity={1}>
//         <canvasTexture attach="map">
//           {({ canvas }) => {
//             const ctx = canvas.getContext('2d');
//             ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
//             ctx.fillRect(0, 0, 256, 128);
//             ctx.font = '16px Arial';
//             ctx.fillStyle = 'white';
//             ctx.textAlign = 'center';
//             ctx.fillText('Click and drag to rotate', 128, 50);
//             ctx.fillText('Scroll to zoom', 128, 70);
//             return canvas;
//           }}
//         </canvasTexture>
//       </spriteMaterial>
//     </sprite>
//   );
// };

// const ModelViewer = ({ modelPath }) => {
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
//       <PresentationControls
//         global
//         rotation={[0, 0, 0]}
//         polar={[-Math.PI / 4, Math.PI / 4]}
//         azimuth={[-Math.PI / 4, Math.PI / 4]}
//         config={{ mass: 2, tension: 400 }}
//         snap={{ mass: 4, tension: 400 }}
//       >
//         <Suspense fallback={null}>
//           <Model modelPath={modelPath} />
//           <Environment preset="sunset" />
//         </Suspense>
//       </PresentationControls>
//       <Instructions />
//       <OrbitControls 
//         enablePan={true}
//         enableZoom={true}
//         enableRotate={true}
//         minDistance={2}
//         maxDistance={10}
//       />
//     </>
//   );
// };

// const ProductWrap3DWindow = ({ selectedProduct, slideIn }) => {
//   // Default model path if product doesn't have one specified
//   const modelPath = selectedProduct?.modelPath || "/models/default_food.glb";
  
//   return (
//     <ProductWrapContainer
//       variants={slideIn}
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//     >
//       <ProductInfo>
//         <h2>{selectedProduct ? selectedProduct.name : "Product"}</h2>
//         <p>{selectedProduct ? selectedProduct.description : "Loading product details..."}</p>
//       </ProductInfo>
      
//       <ModelContainer>
//         <Suspense fallback={<LoadingSpinner>Loading 3D Model...</LoadingSpinner>}>
//           <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
//             <ModelViewer modelPath={modelPath} />
//           </Canvas>
//         </Suspense>
//       </ModelContainer>
//     </ProductWrapContainer>
//   );
// };

// export default ProductWrap3DWindow;

// src/components/ProductWrap3DWindow.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
// import { Canvas } from '@react-three/fiber';

const ProductWrapContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  /* left: 32rem;
  width: calc(100vw - (96px + 15vw + 15vw)); */
  left: calc(96px + 15vw + 15vw + 3rem); /* Sidebar + main category + sub-category + spacing */
  width: calc(100vw - (96px + 15vw + 15vw + 3rem));
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
  transition: all 200ms ease-out;
  z-index: -1;
  @media (max-width: 768px) {
    position: relative;
    left: 0;
    width: 100vw;
    height: auto;
    padding: 1rem;
    margin-top: 1rem;
  }
`;

const ProductWrap3DWindow = ({ selectedProduct, slideIn, children }) => {
  return (
    <ProductWrapContainer
      variants={slideIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>
        {selectedProduct ? selectedProduct.name : "Product"} - 3D View
      </h2>
      <div style={{ width: "100%", height: "550px", backgroundColor: "#000" }}>
        {/* <Canvas>
          {children}
        </Canvas> */}
      </div>
    </ProductWrapContainer>
  );
};

export default ProductWrap3DWindow;