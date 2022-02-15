import styled from "styled-components";
import { useTheme } from "../../styles/themes";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 56px;
  padding: 2rem 2.75rem;
  border-radius: 0.5rem;
  background-color: ${useTheme.background};
  margin: 2.5rem 0rem;
  align-items: center;
  justify-content: center;

  .carousel-control-prev-icon{
    width: 40px;
    height: 40px;
  }

  .carousel-control-next-icon{
    width: 40px;
    height: 40px;
  }
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${useTheme.primaryText};
`
