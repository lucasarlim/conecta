import { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Depoiment } from "../Depoiment";
import { Container, Title } from "./styles";
import jose from "./../../assets/images/jose.jpg";
import aliandro from "./../../assets/images/aliandro.jpg";

export function DepoimentSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Title>O que nós motiva ?</Title>
      <Carousel prevLabel="" nextLabel="" activeIndex={index} onSelect={handleSelect}>
        <CarouselItem> 
          <Depoiment
            photo={aliandro}
            name="de Sá Ribeiro, Aliandro"
            occupation="DIRETOR E FUNDADOR"
            message="“Sempre me considerei uma pessoa inquieta, cheia de ideias. E, acredito que por essas características, minha trajetória profissional me trouxe a atuar na área de implantação de projetos de engenharia. Um meio incerto, que envolve prazos apertados, metas arrojadas e um dia a dia nada rotineiro e que sempre me fascinou e se tornou parte da minha escolha de vida.  No entanto, mesmo me sentindo realizado profissionalmente, sempre senti um incômodo em não dar andamento e tirar do papel um projeto meu. Algo que surgisse de uma ideia minha.Participei de vários brainstorms com colegas, no intuito de me arriscar como empreendedor. Mas, nenhuma das ideias me fazia acreditar que realmente poderia dar certo e me traria o sentimento de realização. Felizmente, tudo mudou quando surgiu o Conect@. Minha mente se abriu, mostrando-me uma ideia pronta para sair do papel, ser executada e servir de ponte para que a sociedade tenha mais acesso a atendimentos terapêuticos, com o objetivo de disseminar o cuidado com a saúde mental. Eu realmente acredito que esse modelo Online de atendimento prestado pelo Conect@ é o que faltava para a população. Considero como a realidade crescente e o futuro consolidado do atendimento terapêutico. O mundo se encaminha para este modelo de prestação de serviços online, onde você faz suas atividades de qualquer lugar que esteja, alcançando cada vez mais pessoas! Então, meus amigos, tenham certeza de que toda a minha energia será aplicada na intenção de prestar um serviço de alto padrão de qualidade, alicerçados sob tecnologia de ponta para facilitar cada vez mais o dia a dia de vocês, nossos parceiros e clientes!”"
          />
        </CarouselItem>
        <Carousel.Item>
          <Depoiment
            photo={jose}
            name="Carlos, Jose"
            occupation="GESTOR DE MARKETING E CO-FUNDADOR"
            message="“Acredito que a Conect@ nasce para impactar positivamente e
            consolidar ainda mais a modalidade de serviço terapêutico Online,
            através de um atendimento humanizado, acolhedor e preocupado em
            trazer qualidade de vida para quem nos procura. Compartilhar a
            idealização e desenvolvimento desta empresa é algo inspirador e
            motivador. Empreender agregando valor de desenvolvimento humano ao
            nosso pacote de prestação de serviços é uma característica cada vez
            mais escassa para os moldes dos projetos atuais. É o que traz aquele
            brilho nos olhos e a dedicação em propor uma plataforma que
            realmente TRANSFORME a vida das pessoas.”"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
