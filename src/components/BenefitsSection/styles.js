import styled from "styled-components";
import { useTheme } from "../../styles/themes";

export const ContentCardBenefits = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background-color: ${useTheme.background}
  flex-wrap: wrap;
  margin: 2.5rem 0px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Divider = styled.div`
  display: flex;
  width: 2px;
  height: 200px;
  background-color: ${useTheme.divider};

  @media (max-width: 768px) {
    display: none;
  }
`;