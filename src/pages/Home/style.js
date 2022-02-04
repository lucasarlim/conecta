import styled from "styled-components";
import { useTheme } from "../../styles/themes";

export const Main = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 0px 108px;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0px 24px;
  }
`;

export const TitlePage = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 120%;
  color: ${useTheme.brand_400};

  @media (max-width: 720px) {
    align-text: center;
  }
`;

export const Span = styled.span`
  font-size: 3rem;
  font-weight: bold;
  line-height: 120%;
  color: ${useTheme.brand_700};
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 1.125rem;
  line-height: 140%;
  color: ${useTheme.captionText};

  @media (max-width: 720px) {
    align-text: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 56px;
  background-color: ${useTheme.background}
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  
  display: flex;
  flex-direction: row;
  padding: 3.5rem 0rem;
  align-items: center;
  justify-content: space-between;
  grid-gap: 56px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ContentCardBenefits = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background-color: ${useTheme.background}
  flex-wrap: wrap;
  margin: 56px 0px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const InfoWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const SectionDepoiment = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 56px;
  padding: 2.5rem 5.75rem;
  border-radius: 0.5rem;
  background-color: ${useTheme.background};
  margin: 4.5rem 0rem;
  align-items: center;
  justify-content: center;
`;

export const SectionServices = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  grid-gap: 1.5rem;
  margin-bottom:120px;
`

export const DepoimentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
`;

export const ContentServices = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  grid-gap: 2rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
`

export const TitleContent = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${useTheme.primaryText};
`;

export const LogoText = styled.p`
  margin: 0;
  color: ${useTheme.primaryText};
  font-weight: 400;
  font-size: 1.25rem;
`;

export const Text = styled.p`
  width: 100%;
  margin: 0;
  font-size: 1rem;
  color: ${useTheme.captionText};
  line-height: 140%;
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

export const Image = styled.img`
  max-width: ${({ width }) => width};
  height: ${({ height }) => height};
  @media (max-width: 768px) {
    display: none;
  }
`;


