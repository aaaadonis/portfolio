import React, { useState } from "react";
import "./index.css";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const Home = () => {
  const Title = styled.h1`
    color: #000000;
    font-style: normal;
    line-height: 35px;
    font-size: 1.5rem;
    margin: 2rem 5rem;
    text-align: center;
    @media screen and (max-width: 500px) {
      font-size: 0.8rem;
    }
  `;

  const ButtonMenu = styled.button`
    background-color: transparent;
    padding: 10px;
    color: #941c1f;
    border: 1.8px solid #941c1f;
    cursor: pointer;
  `;

  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="hom">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello, I'm Adonis!")
            .start()
            .callFunction(() => {
              handleVisible();
            });
        }}
      />
      <Title className={visible ? "vis" : "novis"}>
        I'm a Full Stack Developer from Brooklyn, New York with a passion for
        design. Outside of tech my interests lay in Fashion and Music. When I'm
        not trying to save the world with my keyboard, I'm probably working on a
        DJ Mix, or graphics some graphics :).
      </Title>
      <ButtonMenu className={visible ? "vis hov" : "novis hov"}>
        Projects
      </ButtonMenu>
    </div>
  );
};

export default Home;
