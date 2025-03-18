import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const SubCategoryContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: calc(96px + 15vw + 2rem);
  width: 15vw;
  height: 100vh;
  background: #fff;
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
const SubMenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  width: 100%;
`;
const CategoryListContainer = styled.div`
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  padding: 0.5rem;
  height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  };
  -ms-overflow-style: none; 
  scrollbar-width: none;
`;

const SubCatList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  padding: 18px 35px;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`;

const SubCategoryWindow = ({ subCategoryItems, openProductWrap, slideIn, categoryRef}) => {
  return (
    <SubCategoryContainer
      variants={slideIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      
    >
      <SubMenuList>
      <CategoryListContainer ref={categoryRef}>
        {subCategoryItems.map((item, index) => (
          <SubCatList key={index} onClick={() => openProductWrap(item)}>
            <div className="left-col">
              <img src={item.img} alt={item.name} className="submenu-image" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
            </div>
            <div className="right-col">
              <h3 className="submenu-name">{item.name}</h3>
              {/* <p className="submenu-description">{item.description}</p> */}
            </div>
          </SubCatList>
        ))}
      </CategoryListContainer>
      </SubMenuList>
    </SubCategoryContainer>
  );
};

export default SubCategoryWindow;
