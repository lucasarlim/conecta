import React from "react";
import { NavMenu } from "../../components/NavMenu";
import {
  Content,
  Image,
  InfoWrapper,
  LogoText,
  Main,
  Span,
  Subtitle,
  Text,
  TitleContent,
  TitlePage,
  Wrapper,
} from "./style";
import women from "./../../assets/images/women.svg";
import specialist from "./../../assets/images/specialist.png";
import { Footer } from "../../components/Footer";
import { CardContact } from "../../components/CardContact";
import { AboutSection } from "../../components/AboutSection";
import { ServicesSection } from "../../components/ServicesSection";
import { BenefitsSection } from "../../components/BenefitsSection";
import { DepoimentSection } from "../../components/DepoimentSection";
import FormSection from "../../components/FormSection";

export const Home = () => {
  return (
    <div>
      <NavMenu />
      <Main>
        <Content id="#">
          <InfoWrapper>
            <TitlePage>
              <Span>Psicólogos e terapia online</Span> ao seu alcance
            </TitlePage>
            <Subtitle>
              Agora você pode conversar com um psicólogo online a qualquer hora
              com sigilo e segurança através da nossa plataforma.
            </Subtitle>
          </InfoWrapper>
          <Image src={women} width="50%" height="auto" />
        </Content>

        <BenefitsSection />

        <AboutSection/>

        <ServicesSection />

        <Wrapper id="especialista">
          <InfoWrapper>
            <LogoText>Conect@</LogoText>
            <TitleContent>Para especialistas</TitleContent>
            <Text>
              Na Conect@, você tem todas as ferramentas para investir em si
              mesmo e, consequentemente, no seu bem-estar profissional. Somos o
              parceiro ideal para a sua jornada.
            </Text>
          </InfoWrapper>
          <Image src={specialist} width="50%" height="auto" />
        </Wrapper>

        <DepoimentSection />
      
        <FormSection />
        
        <CardContact />

      </Main>

      <Footer />
    </div>
  );
};
