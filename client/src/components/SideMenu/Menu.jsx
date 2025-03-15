import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import styled from "styled-components";
import Button from "./Button.jsx";
import Navbar from './Navbar/Navbar.jsx'

const Header = styled.header`
position: fixed;
right: 50px;
top: 50px;
`
const MenuWindow = styled(motion.div)`
width: 480px;
height: 650px;
background-color:#c9fd74;
border-radius: 25px;
position: relative;
`

const menu = {
  open: {
      width: "400px",
      height: "430px",
      top: "-25px",
      right: "-25px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
  },
  closed: {
      width: "100px",
      height: "40px",
      top: "0px",
      right: "0px",
      transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
  }
}

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Header>
      <MenuWindow
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <Navbar />}
        </AnimatePresence>
      </MenuWindow>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </Header>
  );
}

export default Menu