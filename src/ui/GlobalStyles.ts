import styled, { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { Media } from "./media";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
    background: ${Color.White};
    color: ${Color.Black};
}

li{
    list-style-type: none;
}

button {
    font-size: inherit;
    font-family: inherit;
}`;

export const StyledApp = styled.div`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;

  ${Media.MD} {
    margin: 0px auto;
    max-width: 700px;
  }
`;
