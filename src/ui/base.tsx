import styled from "styled-components";
import { Media } from "./media";

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
