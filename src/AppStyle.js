import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
`;

export const ImgCardL = styled.img`
  width: 10%;
  height: auto;
  animation: ${rotate} 8s infinite linear;
`;

