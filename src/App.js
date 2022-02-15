import "./index.css";
import styled from "styled-components";
import { Data } from "./imgs/ImgData.js";


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

const ImgCard = styled.img`
  margin: 5% 0;
  width: 10%;
  height: auto;
  @media screen and (max-width: 500px) {
    width: 50%;
  }
`;

function App() {
  return (
    <Wrapper>
      {Data.map((obj, ind) => {
        return (
          <a href={obj.url} target="_blank">
            <Content>
              <ImgCard
                src={obj.image}
                alt="hello"
                className={
                  obj.descrip === "Lumia Nocito"
                    ? "img-card"
                    : obj.descrip === "Old Portfolio"
                    ? "oldFolio"
                    : obj.descrip === "143"
                    ? "heart-beat"
                    : ""
                }
              />
            </Content>
          </a>
        );
      })}
      <LinkWrapper>
        <ul>
          <li>
            <a href="./imgs/Adonis-Edwards-Resume.pdf" download>
              <i className="fa-solid fa-file"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/adonis-edwards/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>

          <li>
            <a href="https://github.com/aaaadonis" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </LinkWrapper>
    </Wrapper>
  );
}

export default App;

