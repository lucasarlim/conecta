import React from "react";
import {
  Container,
  Content,
  Image,
  Label,
  LinkPage,
  Pages,
  SocialWrapper,
} from "./style";
import logo from "./../../assets/brand/blackLogo.png";
import { FiInstagram, FiLinkedin } from "react-icons/fi";

export function Footer() {
  return (
    <Container>
      <Content>
        <Image src={logo} />

        <SocialWrapper>
          <a href="https://instagram.com/conectaoficialbr?utm_medium=copy_link" target="_blank">
            <FiInstagram size="2rem" color="#515D6E" cursor="pointer"/>
          </a>
          <a href="https://www.linkedin.com/company/conectaoficalbr" target="_blank">
            <FiLinkedin size="2rem" color="#515D6E" cursor="pointer"/>
          </a>
        </SocialWrapper>
      </Content>

      <Pages>
        <Content>
          <Label>Sobre a Conect@</Label>
          <LinkPage href="#sobre">Sobre nós</LinkPage>
          <LinkPage href="#contato">Contate-nós</LinkPage>
          <LinkPage href="#service">Aréas da Psicoterapia</LinkPage>
        </Content>

        <Content>
          <Label>Sou especialista</Label>
          <LinkPage href="#message">Como fazer parte da Conect@ ?</LinkPage>
        </Content>

      </Pages>
    </Container>
  );
}
