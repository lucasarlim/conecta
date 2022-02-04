import styled from "styled-components";
import { useTheme } from "../../styles/themes";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
  padding: 2.4rem 1.5rem;
`;

export const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Title = styled.h3`
  font-size: 1rem;
  color: ${useTheme.primaryText};
  text-align: center;
  margin: 0;
`;

export const Text = styled.p`
  width: 100%;
  text-align: center;
  font-size: 0.875rem;
  color: ${useTheme.captionText};
`;
