import styled from "styled-components";
import { useTheme } from "../../styles/themes";

export const Navbar = styled.nav`
  display: flex;
  width: 100%;
  padding: 24px 108px;
  flex-wrap: wrap;
  grid-gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`
export const Image = styled.img`
  width: 11.75rem;
  height: 4rem;
`

export const OptionsMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 24px;
`

export const NavLink = styled.a`
  font-size: 1.125rem;
  font-weight: medium;
  color: #707070;
  cursor: pointer;
  transition: 0.8s ease-out;

  &:hover {
    text-decoration: none;
    color: ${useTheme.brand_500};
	}
`