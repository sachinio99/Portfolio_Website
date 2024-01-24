import {Layout} from "../src/layout/index";
import main from "../styles/main.module.css";
import styled from "styled-components";
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const StyledText = styled.h1`
  font-family: "Monsterrat", sans-serif;
  font-size: 30px;
  justify-content: left;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const Home = () => {
  return (
    
    <section className="home">
      <div>
      <Container>
        <StyledText className="nameHeader">SACHIN SHAH</StyledText>
        <Typewriter 
        onInit={(typewriter) => { 
          typewriter.typeString('Software Engineer + Building with AI + Writing about pivoting into product + Curating amazing playlists') 
            .callFunction(() => { 
              console.log('String typed out!'); 
            }) 
            .pauseFor(2500) 
            .start(); 
        }} 
      /> 
      </Container>
      
      </div>
      
    </section>
  );
};

export default Home;