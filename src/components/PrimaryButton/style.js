import styled from "styled-components";
import { useTheme } from "../../styles/themes";

export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0.75rem 2.5rem;
  border: none;
  border-radius: 56px;
  background-color: ${useTheme.brand_500};
  cursor: pointer;
  transition: 1s ease-out;

  &:hover {
    background-color: ${useTheme.brand_700};
	}

  &:pressed {
    background-color: ${useTheme.brand_800};
	}

`
export const Label = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1rem;
  color: ${useTheme.whiteText};
`