import styled from "styled-components";
import useTheme from "./../../styles/themes.js";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;

    grid-gap: 1rem;
    margin: 2.25rem 0rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${useTheme.primaryText};
`;

export const Text = styled.div`
  width: 100%;
  margin: 0;
  font-size: 1rem;
  color: ${useTheme.captionText};
  line-height: 140%;
`;
