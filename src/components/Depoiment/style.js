import styled from "styled-components";
import { useTheme } from "../../styles/themes";

export const Container = styled.div`
width: 100%;
height: auto;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
grid-gap: 56px;
background-color: ${useTheme.background}
flex-wrap: wrap;

@media (max-width: 768px) {
  justify-content: center;
}
`;

export const DepoimentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
`;

export const InfoDepoiment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
  color: ${useTheme.captionText};
`;

export const Name = styled.p`
  margin: 0;
  font-size: 1.125rem;
  font-weight: medium;
  color: ${useTheme.title};
`;

export const Text = styled.p`
  width: 100%;
  margin: 0;
  font-size: 1rem;
  color: ${useTheme.captionText};
  line-height: 140%;
`;

export const Image = styled.img`
  max-width: ${({ width }) => width};
  height: ${({ height }) => height};
  @media (max-width: 768px) {
    display: none;
  }
`;
