import styled from "styled-components";
import { useTheme } from "../../styles/themes";

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  transform: translateY(0rem);
  transition: 1s ease-out;

  &:hover {
    transform: translateY(-0.5rem)
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 12.5rem;
  height: 12.5rem;
  padding: 1rem 1rem 0rem 1rem;
  border-radius: 24px 24px 24px 24px;
  background-color: ${useTheme.brand_50};
  cursor: pointer;
`

export const Image = styled.img`
  width: auto;
  height: 13.5rem;
  margin-left: -30%;
`

export const Label = styled.h3`
  width: 100%;
  text-align: left;
  font-size: 1.125rem;
  font-weight: normal;
  color: ${useTheme.title};
  margin: 0;
`