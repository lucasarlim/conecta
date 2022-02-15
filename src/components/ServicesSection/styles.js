import styled from "styled-components";
import { useTheme } from "../../styles/themes";


export const Container = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    grid-gap: 1rem;
    margin: 2.25rem 0rem;
`

export const ServicesContent = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    flex-wrap: wrap;

    grid-gap: 8px;
`

export const ServiceBox = styled.p`
    width: 100%;

    display: flex;
    padding: 16px;

    font-size: 1rem;
    font-weight: bold;
    color: ${useTheme.captionText};

    border-radius: 8px;
    border: 1px solid ${useTheme.border};

`

export const InfoContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    grid-gap: 2rem;
`

export const Image = styled.img`
    width: 50%;
    auto: auto;

    @media (max-width: 768px){
        display: none;
    }
`

export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${useTheme.primaryText};
`;
