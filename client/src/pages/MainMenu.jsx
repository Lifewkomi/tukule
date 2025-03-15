// import React, { Suspense, useState }  from "react";
// import styled from "styled-components";
// import { IconClock, IconPhone, IconX} from "@tabler/icons-react";
// import { motion } from "framer-motion";

// import logo from "../Assets/logo.png";
// import {MenuItems, Burgers, Main_Dishes, Pizzeria } from "../assets/assets.jsx";
// import { slideIn } from "../components/Animation/Anim.jsx";
// import { Canvas } from '@react-three/fiber';
// // import BurgerModel from "../3dModels/BurgerModel.jsx";

// const Section = styled.section`
//   display: block;
//   background-color: ${(props) => props.theme.Body};
//   height: 100vh;
//   width: 100vw;
//   h1 {
//     color: ${(props) => props.theme.Text};
//     font-size: 4rem;
//     font-family: ${(props) => props.theme.Font1};
//     font-weight: lighter;
//   }
//   p {
//     font-size: 1.2rem;
//     max-width: 75%;
//     columns: #808080;
//   }
// `;
// const Container1 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem 0;
// `;
// const SideBar = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   z-index: 100;
//   .main-bar {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 96px;
//     height: 100%;
//     background-color: #d0cdcd;
//     box-shadow: 2px 0px 20px rgba(0, 0, 0, 0.1);
//     z-index: 22;
//   }
// `;
// const MainCategory = styled(motion.div)`
//   position: absolute;
//   top: 0;
//   left: 6rem;
//   width: 15vw;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: #d0cdcd;
//   transition: all 300ms ease-out;
//   z-index: 20;
// `;
// const MenuList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   align-items: center;
//   position: relative;
//   cursor: pointer;
//   width: 100%;
//   img {
//     width: 80%;
//     height: auto;
//     object-fit: cover;
//   }
// `;

// const SubCategory = styled(motion.div)`
//   position: absolute;
//   top: 0;
//   left: 18rem;
//   width: 15vw;
//   height: 100vh;
//   background: #fff;
//   opacity: 1;
//   visibility: visible;
//   z-index: -1;
//   transition: all 200ms ease-out;
// `;

// const SubMenuList = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// height: auto;
// overflow-y: auto;
// overflow-x: hidden;
// outline: none;
// `

// const SubCatList = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   background: #fff;
//   padding: 18px 35px;
//   cursor: pointer;
//   padding-left: 15px;
//   padding-right: 15px;
//   transform: translate(0px, 0px);
//   opacity: 1;
//   visibility: inherit;
// `;

// const ProductWrap3D = styled(motion.div)`
//   position: absolute;
//   top: 0;
//   left: 37.5vw;
//   width: calc(100vw - (96px + 15vw + 15vw));
//   height: 100vh;
//   background: rgba(255,255,255,0.8);
//   opacity: 1;
//   visibility: visible;
//   z-index: -1;
//   transition: all 200ms ease-out;
// `;

// const Logo = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 20px;
//   a {
//     text-decoration: none;
//     img {
//       width: 35px;
//       height: 35px;
//     }
//   }
//   h1 {
//     font-size: 1rem;
//     font-weight: lighter;
//   }
// `;

// const Phone = styled.div`
//   /* position: absolute;
//   top: 142px;
//   left: 24px; */
//   position: relative;
//   top: 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 48px;
//   height: 48px;
//   border: 1px solid #000;
//   border-radius: 8px;
//   background: transparent;
//   border-radius: 8px;
//   transition: all 500ms ease-out;
//   z-index: 10;
//   svg{
//     height: 50px;
//     width: 50px;
//     stroke-width: 1px;
//   }
// `;
// const Hours = styled.div`
//   position: relative;
//   top: 4rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 48px;
//   height: 80px;
//   border: 1px solid #000;
//   border-radius: 8px;
//   font-family: "Roboto", sans-serif;
//   text-decoration: none;
//   z-index: 10;
//   svg{
//     position: absolute;
//     top: 69px;
//     z-index: 20;
//     width: 25px;
//     height: 25px;
//     stroke-width: 1px;
//   }
// `;
// const DishesMenuButton = styled.div`
//   position: absolute;
//   top: 25%;
//   left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   margin: 70px 0;
//   padding: 130px 0;
//   text-align: center;
//   pointer-events: auto;
//   /* ::before{
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 300px;
//     background: #fff;
//     z-index: 5;
//   } */
//   button {
//     position: relative;
//     width: 100%;
//     height: 60px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     background: none;
//     border: 0;
//     transform: none !important;
//     cursor: pointer;
//     outline: none;
//     z-index: 9;
//     .closeIcon{
//       display: flex;
//       flex-direction: column;
//       justify-items: center;
//       align-items: center;
//       svg{
//         width: 65px;
//         height: 50px;
//         stroke-width: 1px;
//       }
//     }
//     .MenuName{
//       display: flex;
//       flex-direction: column;
//       font-size: 18px;
//       font-family: ${props => props.theme.Font1};
//     }
//   }
// `;

// const MainMenu = () => {
//   const [isMainCategoryOpen, setIsMainCategoryOpen] = useState(false);
//   const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);
//   const [isProductWrapOpen, setIsProductWrapOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category

//   const toggleMainCategory = () => {
//     if (isMainCategoryOpen) {
//       setIsMainCategoryOpen(false);
//       setIsSubCategoryOpen(false);
//       setIsProductWrapOpen(false);
//       setSelectedCategory(null); // Reset selection
//     } else {
//       setIsMainCategoryOpen(true);
//     }
//   };
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setIsSubCategoryOpen(true); // Open the sub-category window
//   };


//   const openProductWrap = () => {
//     setIsProductWrapOpen(true);
//   };

//   const renderSubCategoryItems = () => {
//     switch (selectedCategory?.toLowerCase()) {
//       case "burgers":
//         return Burgers;
//       case "main_dishes":
//         return Main_Dishes;
//       case "pizzeria":
//         return Pizzeria;
//       // case "sauces":
//       //   return Sauces;
//       // case "salads":
//       //   return Salads;
//       // case "drinks":
//       //   return Drinks;
//       default:
//         return [];
//     }
//   };

//   return (
//     <Section>
//       <Container1>
//         <h1>Our Menu</h1>
//         <p>
//           Explore Your Meal in 3D: See Every Detail, Pick Your Favorite, and
//           Love Every Bite!
//         </p>
//       </Container1>
//       <SideBar>
//         <div className="main-bar">
//           <Logo>
//             <a href="/">
//               <img src={logo} alt="Logo" />
//             </a>
//             <h1>TUKULE</h1>
//           </Logo>
//           <Phone>
//             <IconPhone fill="#000" />
//           </Phone>
//           <Hours>
//             <h2>09:00</h2>
//             <span>to</span>
//             <h2>21:00</h2>
//             <IconClock />
//           </Hours>
//           <DishesMenuButton>
//             <button onClick={toggleMainCategory}>
//               {isMainCategoryOpen ? (
//                 <span className="closeIcon">
//                   <IconX />
//                 </span>
//               ) : (
//                 <span className="MenuName">
//                   <h2>Our</h2>
//                   <h2>Menu</h2>
//                 </span>
//               )}
//             </button>
//           </DishesMenuButton>
//         </div>

//         {/* MAIN CATEGORY WINDOW */}
//         {isMainCategoryOpen && (
//           <MainCategory
//             variants={slideIn}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//           >
//             {MenuItems.map((item, index) => (
//               <MenuList
//                 key={index}
//                 onClick={() => handleCategoryClick(item.menu_name)}
//               >
//                 <img src={item.menu_img} alt={item.menu_name} />
//                 <p>{item.menu_name}</p>
//               </MenuList>
//             ))}
//           </MainCategory>
//         )}

//         {/* SUB CATEGORY DIV WINDOW */}
//         {isSubCategoryOpen && (
//           <SubCategory
//             variants={slideIn}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//           >
//             {renderSubCategoryItems().map((item, index) => (
//               <SubMenuList onClick={openProductWrap}>
//                 <SubCatList>
//                   <div className="left-col">
//                     <img
//                       src={item.img}
//                       alt={item.name}
//                       className="submenu-image"
//                     />
//                   </div>
//                   <div className="right-col">
//                     <h3 className="submenu-name">{item.name}</h3>
//                     {/* <p className="submenu-description">{item.description}</p> */}
//                   </div>
//                 </SubCatList>
//               </SubMenuList>
//             ))}
//           </SubCategory>
//         )}

//         {/* Product Wrap 3D Div */}
//         {isProductWrapOpen && (
//           <ProductWrap3D
//             variants={slideIn}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//           >
//             <h2>{selectedCategory} - 3D Product View</h2>
//             <div style={{ width: "100%", height: "400px", backgroundColor: "#000" }}>
//               <Canvas>
//                 <ambientLight intensity={0.5} />
//                 <pointLight position={[10, 10, 10]} />
//                 {/* <Suspense fallback>
//                   {selectedCategory === "Burgers" && <BurgerModel />}
//                 </Suspense> */}
//               </Canvas>
//             </div>
//           </ProductWrap3D>
//         )}
//       </SideBar>
//     </Section>
//   );
// }

// export default MainMenu;
