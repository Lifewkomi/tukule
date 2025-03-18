import React from "react";
import styled from "styled-components";
import { motion, motion as Motion } from "framer-motion";
import Menu from "../components/SideMenu/Menu.jsx";

const Section = styled.section`
  background: ${(props) => props.theme.Body};
  h1 {
    display: flex;
    font-family: ${(props) => props.theme.Font1};
    color: ${(props) => props.theme.Text};
    font-size: clamp(4rem, 8vw, 9rem);
    align-items: center;
    text-align: center;
    margin: 0;
  }
`;
const Text1 = styled(motion.div)`
  position: absolute;
  top: 10rem;
  position: relative;
  padding: 0 2rem;
  h1 {
    display: flex;
    font-family: ${(props) => props.theme.Font1};
    color: ${(props) => props.theme.Text};
    font-size: clamp(4rem, 8vw, 9rem);
    align-items: center;
    text-align: center;
    margin: 0;
  }
  span {
    margin-top: 7rem;
    font-family: ${(props) => props.theme.Font1};
    color: ${(props) => props.theme.Text};
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-top: 1rem;
    margin-left: 1.5rem;
    text-align: center;
  }
`;

const Home = () => {
  return (
    <Section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <Menu />
      <Text1
        className="flex flex-col max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-white uppercase"
        >
          The Future of Dining Experience
        </Motion.h2>

        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          Tukule
          <Motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Swahili for Let's Eat.
          </Motion.span>
        </Motion.h1>
      </Text1>
    </Section>
  );
};

export default Home;
