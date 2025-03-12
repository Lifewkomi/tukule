import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
position: absolute;
top: 0;
right: 0;
width: 100px;
height: 40px;
cursor: pointer;
border-radius: 25px;
overflow: hidden;
`

const Slider = styled(motion.div)`
  position: relative;
    width: 100%;
    height: 100%;
`

const El = styled(motion.div)`
width: 100%;
height: 100%;
background-color: #c9fd74;
    p{
    margin: 0px;
    }
    &:nth-of-type(2){
    background-color: black;
    p{
        color: #c9fd74;
    }
    }
`
const PerspectiveTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;
    transition: transform 0.75s cubic-bezier(0.76, 0, 0.24, 1);
    p{
        transition: all 0.75s cubic-bezier(0.76, 0, 0.24, 1);
        pointer-events: none;
        text-transform: uppercase;
        &:nth-of-type(2){
            position: absolute;
            transform-origin: bottom center;
            transform: rotateX(-90deg) translateY(9px);
            opacity: 0;
        }
    }
    
`
function PerspectiveText({label}) {
    return (    
        <PerspectiveTextContainer>
            <p>{label}</p>
            <p>{label}</p>
        </PerspectiveTextContainer>
    )
}

export default function Button({isActive, toggleMenu}) {
  return (
    <Container>
        <Slider
            animate={{top: isActive ? "-100%" : "0%"}}
            transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
        >
            <El
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Menu"/>
            </El>
            <El
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Close" />
            </El>
        </Slider>
    </Container>
  )
}

