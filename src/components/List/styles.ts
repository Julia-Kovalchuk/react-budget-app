import styled from "styled-components";

const StyledList = styled.ul<{ $isSearching: boolean }>`
  margin-top: 10px;
  height: 200px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $isSearching }) => ($isSearching ? "center" : "start")};
`;

const Phrase = styled.p`
  text-align: center;
  font-size: 20px;
`;

export { StyledList, Phrase };
