import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { perspective, slideIn } from "./Anim.jsx";

const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 40px 50px 40px;
  height: 100%;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const LinkContainer = styled.div`
  perspective: 120px;
  perspective-origin: bottom;
`;

const Texts = styled(motion.span)`
  text-decoration: none;
  color: black;
  font-family: ${(props) => props.theme.Font1};
  font-size: 1.5rem;
`;
const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 2rem;
  a {
    font-family: ${(props) => props.theme.Font1};
    font-size: 1rem;
    font-weight: medium;
    width: 50%;
    margin-top: 5px;
  }
`;

const links = [
  { title: "Menu", to: "/menu" },
  { title: "Reserve a Table", to: "/reservations" },
  { title: "Shop", to: "/shop" },
  { title: "Contacts", to: "/contacts" },
];

const footerLinks = [
  {
    title: "Instagram",
    href: "https://www.instagram.com",
  },
  {
    title: "WhatsApp",
    href: "https://www.whatsapp.com",
  },
  {
    title: "Mail",
    href: "mailto:philemonkomi46@gmail.com subject=Regarding%20Job%20Opportunity",
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com",
  },
];


const index = () => {
  return (
    <Navbar>
      <Container>
        {links.map((link, i) => {
          const { title, to } = link;
          return (
            <LinkContainer key={`b_${i}`}>
              <Link
                to={to}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Texts>{title}</Texts>
              </Link>
            </LinkContainer>
          );
        })}

        <Footer>
          {footerLinks.map((link, i) => {
            const { title, href } = link;
            return (
              <motion.a
                variants={slideIn}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
                key={`f_${i}`}
                href={href}
              >
                {title}
              </motion.a>
            );
          })}
        </Footer>
      </Container>
    </Navbar>
  );
}

export default index
