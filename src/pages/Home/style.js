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


export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;


export const SectionServices = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  grid-gap: 1.5rem;
  margin-bottom: 120px;
`;

export const ContentAbout = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 1.5rem;
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
`;

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

export const Image = styled.img`
  max-width: ${({ width }) => width};
  height: ${({ height }) => height};
  @media (max-width: 768px) {
    display: none;
  }
`;
