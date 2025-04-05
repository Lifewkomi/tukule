import React, { Suspense, useRef, useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import { IconClock, IconPhone, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";

import logo from "../Assets/logo.png";
import { slideIn } from "../components/Animation/Anim.jsx";

// Lazy load components and assets
const MainCategoryWindow = React.lazy(() => import("../components/categoryWindows/MainCategory.jsx"));
const SubCategoryWindow = React.lazy(() => import("../components/categoryWindows/SubCategory.jsx"));
const ProductWrap3DWindow = React.lazy(() => import("../components/categoryWindows/ProductCategory.jsx"));

// Lazy load menu data
const loadMenuItems = () => import("../assets/assets.jsx").then(module => module.MenuItems);
const loadCategoryItems = (category) => {
  if (!category) return Promise.resolve([]);
  
  return import("../assets/assets.jsx").then(module => {
    switch (category.toLowerCase()) {
      case "burgers": return module.Burgers;
      case "main dishes": return module.Main_Dishes;
      case "pizzeria": return module.Pizzeria;
      case "sauces": return module.Sauces;
      case "salads": return module.Salads;
      case "drinks": return module.Drinks;
      default: return [];
    }
  });
};

// Optimized styled components
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
`;

const MainBar = styled.div`
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

const BarButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48px;
  border: 1px solid #000;
  border-radius: 8px;
  background: transparent;
  transition: all 500ms ease-out;
  z-index: 10;
  
  svg {
    width: ${props => props.iconSize || "25px"};
    height: ${props => props.iconSize || "25px"};
    stroke-width: 1px;
  }
`;

const Phone = styled(BarButton)`
  position: relative;
  top: 2rem;
  height: 48px;
  
  svg {
    height: 50px;
    width: 50px;
  }
`;

const Hours = styled(BarButton)`
  position: relative;
  top: 4rem;
  height: 80px;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  
  svg {
    position: absolute;
    top: 69px;
    z-index: 20;
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
  }
  
  .closeIcon {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    
    svg {
      width: 65px;
      height: 50px;
      stroke-width: 1px;
    }
  }
  
  .MenuName {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-family: ${props => props.theme.Font1};
  }
`;

const BackButton = styled(BarButton)`
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
  height: 48px;
`;

const MainMenu = () => {
  // State with more selective updates
  const [isMainCategoryOpen, setIsMainCategoryOpen] = useState(false);
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);
  const [isProductWrapOpen, setIsProductWrapOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [subCategoryItems, setSubCategoryItems] = useState([]);
  
  const categoryRef = useRef(null);

  // Load menu items only when needed
  React.useEffect(() => {
    if (isMainCategoryOpen && menuItems.length === 0) {
      loadMenuItems().then(items => setMenuItems(items));
    }
  }, [isMainCategoryOpen, menuItems.length]);

  // Load subcategory items only when needed
  React.useEffect(() => {
    if (selectedCategory) {
      loadCategoryItems(selectedCategory).then(items => setSubCategoryItems(items));
    }
  }, [selectedCategory]);

  // Memoized toggle function
  const toggleMainCategory = useCallback(() => {
    if (isMainCategoryOpen) {
      setIsMainCategoryOpen(false);
      setIsSubCategoryOpen(false);
      setIsProductWrapOpen(false);
      setSelectedCategory(null);
      setSelectedProduct(null);
    } else {
      setIsMainCategoryOpen(true);
    }
  }, [isMainCategoryOpen]);

  // Memoized category click handler
  const handleCategoryClick = useCallback((category) => {
    if (selectedCategory === category && isSubCategoryOpen) {
      setIsSubCategoryOpen(false);
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      setIsSubCategoryOpen(true);
    }
    
    // Only reset product state when necessary
    if (isProductWrapOpen) {
      setIsProductWrapOpen(false);
      setSelectedProduct(null);
    }
  }, [selectedCategory, isSubCategoryOpen, isProductWrapOpen]);

  // Memoized product open handler
  const openProductWrap = useCallback((product) => {
    setSelectedProduct(product);
    setIsProductWrapOpen(true);
  }, []);

  // Memoized scroll handler
  const scrollCategories = useCallback((direction) => {
    if (categoryRef.current) {
      const container = categoryRef.current;
      const scrollStep = 100;
      
      if (direction === "up") {
        if (container.scrollTop === 0) {
          container.scrollTo({
            top: container.scrollHeight,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({
            top: -scrollStep,
            behavior: "smooth",
          });
        }
      } else {
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
          container.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({
            top: scrollStep,
            behavior: "smooth",
          });
        }
      }
    }
  }, []);

  // Render main content based on current state
  const renderMainContent = useMemo(() => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        {isProductWrapOpen && (
          <ProductWrap3DWindow 
            selectedProduct={selectedProduct} 
            slideIn={slideIn}
          />
        )}
        {!isProductWrapOpen && isSubCategoryOpen && (
          <SubCategoryWindow
            subCategoryItems={subCategoryItems}
            openProductWrap={openProductWrap}
            slideIn={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            categoryRef={categoryRef}
          />
        )}
        {!isProductWrapOpen && !isSubCategoryOpen && isMainCategoryOpen && (
          <MainCategoryWindow
            categories={menuItems}
            scrollCategories={scrollCategories}
            handleCategoryClick={handleCategoryClick}
            categoryRef={categoryRef}
            slideIn={slideIn}
          />
        )}
      </Suspense>
    );
  }, [
    isMainCategoryOpen, 
    isSubCategoryOpen, 
    isProductWrapOpen, 
    selectedProduct,
    menuItems,
    subCategoryItems,
    scrollCategories,
    handleCategoryClick,
    openProductWrap
  ]);

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
        <MainBar>
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
          <BackButton className="Back">
            <span className="text-base text-black uppercase">Back</span>
          </BackButton>
        </MainBar>

        {/* Main Content - Conditionally rendered */}
        {renderMainContent}
      </SideBar>
    </Section>
  );
};

export default React.memo(MainMenu);