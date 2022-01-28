import styled from "styled-components";
import { useTheme } from "../../styles/themes";

export const Container = styled.button`
  margin: 0;
  padding: 0px 40px;
  border: none;
  border-radius: 8px;
  background-color: ${useTheme.brand_500};
  cursor: pointer
`
export const Label = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${useTheme.whiteText};
`