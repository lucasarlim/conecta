import React from "react";
import { NavMenu } from "../../components/NavMenu";
import {
  Content,
  ContentCardBenefits,
  ContentServices,
  Divider,
  HeaderContent,
  Image,
  InfoWrapper,
  LogoText,
  Main,
  SectionDepoiment,
  SectionServices,
  Span,
  Subtitle,
  Text,
  TitleContent,
  TitlePage,
  Wrapper,
} from "./style";
import women from "./../../assets/images/women.svg";
import company from "./../../assets/images/company.png";
import specialist from "./../../assets/images/specialist.png";
import { CardBenefits } from "../../components/CardBenefits";
import home from "./../../assets/icons/home.svg";
import star from "./../../assets/icons/star.svg";
import list from "./../../assets/icons/list.svg";
import users from "./../../assets/icons/users.svg";
import meditation from "./../../assets/images/meditation.png";
import doctor from "./../../assets/images/doctor.png";
import therapy from "./../../assets/images/therapy.png";
import female_doctor from "./../../assets/images/female_doctor.png";
import { Footer } from "../../components/Footer";
import { CardContact } from "../../components/CardContact";
import { LearnMore } from "../../components/LearnMore";
import { NavButton } from "../../components/NavButton";
import { CardServices } from "../../components/CardServices";
import { Depoiment } from "../../components/Depoiment";

export const Home = () => {
  return (
    <div>
      <NavMenu />
      <Main>
        <Content>
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

        <ContentCardBenefits>
          <CardBenefits
            icon={home}
            title="Terapia sem sair de casa"
            text="Conforto, privacidade e conveniência onde você estiver e na hora e dia que preferir."
          />
          <Divider />
          <CardBenefits
            icon={star}
            title="Os melhores profissionais"
            text="+500 de profissionais especializados e certificados, selecionados criteriosamente pela equipe Conect@."
          />
          <Divider />
          <CardBenefits
            icon={users}
            title="Diferentes especialidades"
            text="Mais de 60 opções, entre psicanálise, terapias, neuropsicologia, meditação e muito mais."
          />
          <Divider />
          <CardBenefits
            icon={list}
            title="Ampla variedade"
            text="Coach, psicanalista, psicólogo e terapeuta: você decide por qual especialista será atendido."
          />
        </ContentCardBenefits>

        <SectionServices>
          <HeaderContent>
            <TitleContent>Seja nosso parceiro</TitleContent>
            <NavButton />
          </HeaderContent>
          <ContentServices>
            <CardServices label="Meditação" image={meditation} />
            <CardServices label="Neuropsicologia" image={female_doctor} />
            <CardServices label="Psicanálise" image={doctor} />
            <CardServices label="Terapia" image={therapy} />
          </ContentServices>
        </SectionServices>

        <Wrapper>
          <Image src={company} width="50%" height="auto" />
          <InfoWrapper>
            <LogoText>Conect@</LogoText>
            <TitleContent>Para empresas</TitleContent>
            <Text>
              Quer que a sua empresa também ofereça um benefício de saúde
              emociona? Então, indique a Conect@ para o seu RH que nós cuidamos
              de todo o resto!
            </Text>
            <LearnMore />
          </InfoWrapper>
        </Wrapper>

        <Wrapper>
          <InfoWrapper>
            <LogoText>Conect@</LogoText>
            <TitleContent>Para especialistas</TitleContent>
            <Text>
              Na Conect@, você tem todas as ferramentas para investir em si
              mesmo e, consequentemente, no seu bem-estar profissional. Somos o
              parceiro ideal para a sua jornada.
            </Text>
            <LearnMore />
          </InfoWrapper>
          <Image src={specialist} width="50%" height="auto" />
        </Wrapper>

        <SectionDepoiment>
          <TitleContent>
            Oque os nossos cliente e colaboradores dizem sobre a nossa
            plataforma
          </TitleContent>
          <Depoiment />
        </SectionDepoiment>

        <CardContact />
      </Main>

      <Footer />
    </div>
  );
};
