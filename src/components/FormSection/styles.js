import styled from "styled-components";
import { useTheme } from "../../styles/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: auto;
  margin: 2.25rem 0rem;

  > form > span {
    color: red;
  }
`

export const TitleContent = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${useTheme.primaryText};
  text-align: center;
`;

export const Text = styled.p`
  width: 100%;
  margin: 0 auto;
  font-size: 1rem;
  color: ${useTheme.captionText};
  line-height: 140%;
  text-align: center;
`;