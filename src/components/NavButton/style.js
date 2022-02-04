import styled from "styled-components";
import { useTheme } from "../../styles/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 1rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 56px;
  cursor: pointer;
  background-color: ${useTheme.whiteText};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
  transition: 1s ease-out;

  &:hover {
    transform: scale(1.125)
  }
`