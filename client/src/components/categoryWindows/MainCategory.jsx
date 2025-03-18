import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { MenuItems } from "../../assets/assets";

const MainCategoryContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: calc(96px + 1rem); /* 96px sidebar + extra spacing */
  width: 15vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d0cdcd;
  transition: all 300ms ease-out;
  z-index: 20;
  @media (max-width: 768px) {
    position: relative;
    left: 0;
    width: 100vw;
    height: auto;
    padding: 1rem;
  }
`;

const ScrollButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
`;

const CategoryListContainer = styled.div`
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  padding: 0.5rem;
  height: calc(100vh - 10vh);
  &::-webkit-scrollbar {
    display: none;
  };
  -ms-overflow-style: none; 
  scrollbar-width: none;
`;

const MenuList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 2px solid rgb(255,255,255,0.6);

  img {
    width: 80%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
  }
  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #333;
    text-align: center;
  }
`;
const MainCategoryWindow = ({
  scrollCategories,
  handleCategoryClick,
  categoryRef,
  slideIn,
}) => {
  return (
    <MainCategoryContainer
      variants={slideIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ScrollButton onClick={() => scrollCategories("up")}>▲</ScrollButton>
      <CategoryListContainer ref={categoryRef}>
        {MenuItems.map((item, index) => (
          <MenuList
            key={index}
            onClick={() => handleCategoryClick(item.menu_name)}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
          >
            <img src={item.menu_img} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </MenuList>
        ))}
      </CategoryListContainer>
      <ScrollButton onClick={() => scrollCategories("down")}>▼</ScrollButton>
    </MainCategoryContainer>
  );
};

export default MainCategoryWindow;
