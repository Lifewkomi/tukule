// src/components/ProductWrap3DWindow.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

const ProductWrapContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 37.5vw;
  width: calc(100vw - (96px + 15vw + 15vw));
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
  transition: all 200ms ease-out;
  z-index: -1;
`;

const ProductWrap3DWindow = ({ selectedCategory, slideIn, children }) => {
  return (
    <ProductWrapContainer
      variants={slideIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>{selectedCategory} - 3D View</h2>
      <div style={{ width: "100%", height: "400px", backgroundColor: "#000" }}>
        <Canvas>
          {children}
        </Canvas>
      </div>
    </ProductWrapContainer>
  );
};

export default ProductWrap3DWindow;
