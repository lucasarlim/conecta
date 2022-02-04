import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 4px;
  color: ${({color}) => color};
`

export const Text = styled.p`
  font-size: 0.875rem;
  font-weight: medium;
  cursor: pointer;
  margin: 0;

  &:hover {
    text-decoration: underline;
  }
`