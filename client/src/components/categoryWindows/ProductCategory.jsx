// src/components/ProductWrap3DWindow.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

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
        <Canvas>
          {children}
        </Canvas>
      </div>
    </ProductWrapContainer>
  );
};

export default ProductWrap3DWindow;
