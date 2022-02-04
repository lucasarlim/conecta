import React from "react";
import { Container, Content, Image, Label, LinkPage, Pages, SocialWrapper, Subtitle, Wrapper } from "./style";
import logo from "./../../assets/brand/blackLogo.png";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

export function Footer() {
  return (
    <Container>

      <Content>
        <Image src={logo} />
        <Subtitle>
          Lorem ipsum dolor sit amet.
        </Subtitle>

        <SocialWrapper>
          <FiFacebook size="2rem" color="#515D6E"/>
          <FiLinkedin size="2rem" color="#515D6E"/>
        </SocialWrapper>
      </Content>

      <Pages>
        <Wrapper>
          <Content>
            <Label>Para empresas</Label>
            <LinkPage>Planos para empresa</LinkPage>
          </Content>

          <Content>
            <Label>Sou especialista</Label>
            <LinkPage>Como me cadastrar?</LinkPage>
          </Content>
        </Wrapper>
        
        <Content>
          <Label>Ajuda</Label>
          <LinkPage>Perguntas Frequentes</LinkPage>
          <LinkPage>Termos de uso</LinkPage>
          <LinkPage>Políticas de Privacidade</LinkPage>
        </Content>
        
        <Content>
          <Label>Sobre a Conect@</Label>
          <LinkPage>Sobre nós</LinkPage>
          <LinkPage>Nossos Serviços</LinkPage>
          <LinkPage>Blog</LinkPage>
        </Content>
      </Pages>

    </Container>
  );
}
