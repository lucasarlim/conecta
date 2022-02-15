import styled from "styled-components";
import { useTheme } from "../../styles/themes";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 4.5rem 6.75rem;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${useTheme.background};
  grid-gap: 1.5rem;

  @media (max-width: 768px) {
    flex-wrap:wrap;
    padding: 40px 24px;
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 1rem;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1.5rem;
`

export const Content = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`

export const Pages = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  grid-gap: 2rem;
  flex-wrap: wrap;
`

export const Image = styled.img`
  width: 11.75rem;
  height: 4rem;
`

export const Label = styled.h5`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${useTheme.primaryText}
`

export const LinkPage = styled.a`
  font-size: 1.125rem;
  color: ${useTheme.captionText};
  margin: 0;
  cursor: pointer;
  transition: 0.8s ease-out;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: ${useTheme.brand_500}
  }
`