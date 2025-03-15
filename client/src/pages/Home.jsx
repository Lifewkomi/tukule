import React from 'react'
import styled from 'styled-components';
import Menu from '../components/SideMenu/Menu.jsx';

const Section = styled.section`
  background: ${(props) => props.theme.Body};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;
const Text = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 5rem 0;
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
  h2 {
    margin-top: 7rem;
    font-family: ${(props) => props.theme.Font1};
    color: ${(props) => props.theme.Text};
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-top: 1rem;
    text-align: center;
  }
  //LARGER  SCREENS
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0;
    position: relative;
    align-items: center;
    justify-content: center;
    padding-left: 2rem;
    top: 10rem;
    h1 {
      margin-right: 1rem;
      font-size: clamp(8rem, 8vw, 4rem);
    }
  }
`;

const Home = () => {
  return (
    <Section>
      <Menu />  
        <Text>
          <h1>
            Tukule
          </h1>
          <h2>Swahili for Let's Eat</h2>
        </Text>
        
    </Section>
  )
}

export default Home