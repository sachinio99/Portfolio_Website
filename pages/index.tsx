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

const Header = styled.h2`
  font-family: "Monsterrat", sans-serif;
  font-size: 20px;
  text-align: center; /* Add this line to center the text */
  position: absolute; /* Add this line to position the header */
  top: 70%; /* Add this line to vertically center the header */
  left: 51%; /* Add this line to horizontally center the header */
  transform: translate(-50%, -50%); /* Add this line to center the header precisely 
`;

const Container = styled.div`
  width: 100%;
  justify-content: space-evenly;
  text-align: center; 
  
`;
const StyledIFrame = styled.iframe`
  position: absolute;
  top: 75%;
  left: 43%;
  justify-content: space-evenly;
`;


var listeningString = "What I'm Currently Listening To"
export const Home = () => {
  return (
    <section className="home">
      <div>
      <Container>
        <StyledText className="nameHeader">SACHIN SHAH</StyledText>
        <Typewriter 
        onInit={(typewriter) => { 
          typewriter.typeString('Software Engineer + Curating amazing playlists') 
            .callFunction(() => { 
              console.log('String typed out!'); 
            }) 
            .pauseFor(2500) 
            .start(); 
        }} 
      /> 
      </Container>
      <Header>{listeningString}</Header>
      <StyledIFrame src="https://open.spotify.com/embed/playlist/1bfjml9PsCJRZG8i1BZlQA?utm_source=generator" width="300" height="304" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></StyledIFrame>
      </div>
  
      
    </section>
  );
};

export default Home;


