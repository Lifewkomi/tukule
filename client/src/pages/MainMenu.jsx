import React, { Suspense, useRef, useState }  from "react";
import styled from "styled-components";
import { IconClock, IconPhone, IconX} from "@tabler/icons-react";
import { motion } from "framer-motion";

import logo from "../Assets/logo.png";
import {MenuItems, Burgers, Main_Dishes, Pizzeria, Sauces, Salads, Drinks } from "../assets/assets.jsx";
import { slideIn } from "../components/Animation/Anim.jsx";
// import { Canvas } from '@react-three/fiber';
import MainCategoryWindow from "../components/categoryWindows/MainCategory.jsx";
import SubCategoryWindow from "../components/categoryWindows/SubCategory.jsx";
import ProductWrap3DWindow from "../components/categoryWindows/ProductCategory.jsx";

const Section = styled.section`
  display: block;
  background-color: ${(props) => props.theme.Body};
  height: 100vh;
  width: 100vw;
  h1 {
    color: ${(props) => props.theme.Text};
    font-size: 4rem;
    font-family: ${(props) => props.theme.Font1};
    font-weight: lighter;
  }
  p {
    font-size: 1.2rem;
    max-width: 75%;
    columns: #808080;
  }
`;
const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;
const SideBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 100;
  .main-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 96px;
    height: 100%;
    background-color: #d0cdcd;
    box-shadow: 2px 0px 20px rgba(0, 0, 0, 0.1);
    z-index: 22;
    @media (max-width: 768px) {
    width: 60px;
  }
    .Back{
      cursor: pointer;
      position: absolute;
      bottom: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 48px;
      border: 1px solid #000;
      border-radius: 8px;
      background: transparent;
      transition: all 500ms ease-out;
      z-index: 10;
    }
  }
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  a {
    text-decoration: none;
    img {
      width: 35px;
      height: 35px;
    }
  }
  h1 {
    font-size: 1rem;
    font-weight: lighter;
  }
`;

const Phone = styled.div`
  position: relative;
  top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid #000;
  border-radius: 8px;
  background: transparent;
  transition: all 500ms ease-out;
  z-index: 10;
  svg{
    height: 50px;
    width: 50px;
    stroke-width: 1px;
  }
`;
const Hours = styled.div`
  position: relative;
  top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 80px;
  border: 1px solid #000;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  z-index: 10;
  svg{
    position: absolute;
    top: 69px;
    z-index: 20;
    width: 25px;
    height: 25px;
    stroke-width: 1px;
  }
`;
const DishesMenuButton = styled.div`
  position: absolute;
  top: 25%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 70px 0;
  padding: 130px 0;
  text-align: center;
  pointer-events: auto;
  button {
    position: relative;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: none;
    border: 0;
    transform: none !important;
    cursor: pointer;
    outline: none;
    z-index: 9;
    .closeIcon{
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      svg{
        width: 65px;
        height: 50px;
        stroke-width: 1px;
      }
    }
    .MenuName{
      display: flex;
      flex-direction: column;
      font-size: 18px;
      font-family: ${props => props.theme.Font1};
    }
  }
`;

const MainMenu = () => {
  const [isMainCategoryOpen, setIsMainCategoryOpen] = useState(false);
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);
  const [isProductWrapOpen, setIsProductWrapOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category

  const [selectedProduct, setSelectedProduct] = useState(null);


  const toggleMainCategory = () => {
    if (isMainCategoryOpen) {
      setIsMainCategoryOpen(false);
      setIsSubCategoryOpen(false);
      setIsProductWrapOpen(false);
      setSelectedCategory(null);
      setSelectedProduct(null);
    } else {
      setIsMainCategoryOpen(true);
    }
  };

  const handleCategoryClick = (category) => {
    // Check if the clicked category is already selected and the subcategory window is open
    if (selectedCategory === category && isSubCategoryOpen) {
      // Toggle off: close subcategory window and clear selection
      setIsSubCategoryOpen(false);
      setSelectedCategory(null);
      setIsProductWrapOpen(false);
      setSelectedProduct(null);
    } else {
      // Otherwise, select this category and open subcategory window
      setSelectedCategory(category);
      setIsSubCategoryOpen(true);
      setIsProductWrapOpen(false);
      setSelectedProduct(null);
    }
  };



  const openProductWrap = (product) => {
    setSelectedProduct(product);
    setIsProductWrapOpen(true);
  };

  const renderSubCategoryItems = () => {
    switch (selectedCategory?.toLowerCase()) {
      case "burgers":
        return Burgers;
      case "main dishes":
        return Main_Dishes;
      case "pizzeria":
        return Pizzeria;
      case "sauces":
        return Sauces;
      case "salads":
        return Salads;
      case "drinks":
        return Drinks;
      default:
        return [];
    }
  };

  const categoryRef = useRef(null);

  const scrollCategories = (direction) => {
    if (categoryRef.current) {
      const container = categoryRef.current;
      const scrollStep = 100; // Number of pixels to scroll each click
  
      if (direction === "up") {
        // If we're at the top, wrap to the bottom
        if (container.scrollTop === 0) {
          container.scrollTo({
            top: container.scrollHeight, // Jump to the very bottom
            behavior: "smooth",
          });
        } else {
          // Otherwise, scroll up normally
          container.scrollBy({
            top: -scrollStep,
            behavior: "smooth",
          });
        }
      } else {
        // direction === "down"
        // Check if we've reached (or passed) the bottom of the container
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
          // If so, wrap to the top
          container.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          // Otherwise, scroll down normally
          container.scrollBy({
            top: scrollStep,
            behavior: "smooth",
          });
        }
      }
    }
  };
  

  return (
    <Section>
      <Container1>
        <h1>Our Menu</h1>
        <p>
          Explore Your Meal in 3D: See Every Detail, Pick Your Favorite, and
          Love Every Bite!
        </p>
      </Container1>
      <SideBar>
        <div className="main-bar">
          <Logo>
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
            <h1>TUKULE</h1>
          </Logo>
          <Phone>
            <IconPhone fill="#000" />
          </Phone>
          <Hours>
            <h2>09:00</h2>
            <span>to</span>
            <h2>21:00</h2>
            <IconClock />
          </Hours>
          <DishesMenuButton>
            <button onClick={toggleMainCategory}>
              {isMainCategoryOpen ? (
                <span className="closeIcon">
                  <IconX />
                </span>
              ) : (
                <span className="MenuName">
                  <h2>Our</h2>
                  <h2>Menu</h2>
                </span>
              )}
            </button>
          </DishesMenuButton>
          <div className="Back" >
            <span className="text-base text-black uppercase">Back</span>
          </div>
        </div>

        {/* MAIN CATEGORY WINDOW */}
        {isMainCategoryOpen && (
          <MainCategoryWindow
            categories={MenuItems}
            scrollCategories={scrollCategories}
            handleCategoryClick={handleCategoryClick}
            categoryRef={categoryRef}
            slideIn={slideIn}

          />
        )}

        {/* SUB CATEGORY DIV WINDOW */}
        {isSubCategoryOpen && (
          
          <SubCategoryWindow
            subCategoryItems={renderSubCategoryItems()}
            openProductWrap={openProductWrap}
            slideIn={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            categoryRef={categoryRef}
          />
        )}

        {/* Product Wrap 3D Div */}
        {isProductWrapOpen && (
          <ProductWrap3DWindow 
            selectedProduct={selectedProduct} 
            slideIn={slideIn}
          >
            {/* Place your Canvas content here (e.g., 3D model, controls, etc.) */}
          </ProductWrap3DWindow>
        )}
      </SideBar>
    </Section>
  );
}

export default MainMenu;
