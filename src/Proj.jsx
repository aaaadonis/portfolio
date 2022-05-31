import React from 'react'
import "./index.css";
import styled from "styled-components";
import { Data } from "./imgs/ImgData.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Wrapper = styled.div`
  max-width: 100vw;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  font-family: kansasnew, serif;
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
  margin: 5% 0;
  width: 100%;
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



  return (
    <Wrapper>
      <Link to={`/`}>
        <Title>Adonis.</Title>
      </Link>
      <Content>
        {Data.map((obj, ind) => {
          return (
            <a href={obj.url} key={obj.id} target="_blank" rel="noreferrer">
              <ImgCard
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
            </a>
          );
        })}
      </Content>
      <LinkWrapper>
        <ul>
          <li>
            <a
              href="https://drive.google.com/file/d/1Cza72sxvZlGentQa-Z53gS4PYTzdjCdN/view?usp=sharing"
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