import React from 'react'
import "./index.css";
import styled from "styled-components";
import { Data } from "./imgs/ImgData.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";


const Wrapper = styled.div`
  max-width: 100vw;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
`;

const LinkWrapper = styled.div`
  bottom: 0;
  position: fixed;
  padding: 1% 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  width: 95vw;
  color: #000000;
  font-family: Arial, serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1rem;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const ImgCard = styled.img`
  margin: 5% auto;
  margin-bottom: 7.5vh;
  width: 50%;
  display: flex;
  height: auto;
  @media screen and (max-width: 500px) {
    margin: 15% 0;
    width: 100%;
  }
`;

const Words = styled.h1`
  text-decoration: none;
  color: #941c1f;
  font-size: .7rem;
  width: 100%;
  height: auto;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    margin: 15% 0;
    width: 100%;
  }
`;



const Proj = () => {

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      when: "beforeChildren",
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    hover:{
      
      opacity: 1,
    }
  };

  return (
    <Wrapper>
      <Link to={`/`}>
        <Title>Adonis.</Title>
      </Link>
      <Content className="parent">
        {Data.map((obj, ind) => {
          return (
            <a href={obj.url} key={obj.id} target="_blank" rel="noreferrer">
              <ImgCard
                variants={textVariants}
                key={obj.id}
                src={obj.image}
                alt="hello"
                className={
                  obj.descrip === "Lumia Nocito"
                    ? "img-card"
                    : obj.descrip === "Old Portfolio"
                    ? "oldFolio"
                    : obj.descrip === "143"
                    ? "heart"
                    : ""
                }
              />
              <div className="wordCont">
                <motion.p
                  variants={childVariants}
                  initial="hidden"
                  whileHover="hover"
                  className="words"
                >
                  {obj.words}
                </motion.p>
              </div>
            </a>
          );
        })}
      </Content>
      <LinkWrapper>
        <ul>
          <li>
            <a
              href="https://drive.google.com/file/d/1os402MIfA5u6gZC7dYbXB17Qy4FOMy3D/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-file"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/adonis-edwards/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/aaaadonis"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </LinkWrapper>
    </Wrapper>
  );
}

export default Proj