import styled from "styled-components";
import { useTheme } from "../../styles/themes";

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  background-color: ${useTheme.brand_500};
  padding: 3.5rem;
  margin: 0 auto;
  margin-top: 4.5rem;
  border-radius: 8px;

  margin-bottom: -3%;
  z-index: 1;

  align-items: flex-start;
  justify-content: space-between;
  grid-gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 24px
  }
`

export const InfoWrapper = styled.div`
  width: 18rem;
  height: auto;
  display: flex;
  flex-direction: column;
  grid-gap: 0.5rem;
`

export const Label = styled.p`
  width: 100%;
  font-size: 0.875rem;
  font-weight: regular;
  color: ${useTheme.whiteText};
  margin: 0;
`

export const Text = styled.a`
  width: 100%;
  height: auto;
  font-size: 1rem;
  font-weight: medium;
  color: ${useTheme.whiteText};
  margin: 0;
  text-decoration: none;

  &:hover{
    text-decoration: underline;
    color: ${useTheme.whiteText};
  }
`

export const TitleCard = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 130%;
  color: ${useTheme.whiteText};
`

export const Subtitle = styled.p`
  font-size: 1.125rem;
  font-weight: medium;
  color: ${useTheme.whiteText};
  margin: 0;
`