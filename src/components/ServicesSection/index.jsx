import React from "react";

import { Container, ServicesContent, ServiceBox, Image, Title, InfoContent } from "./styles";
import woman from "./../../assets/images/young.png";

export function ServicesSection() {
  const services = [
    "Psicanálise",
    "Cognitivo-comportamental",
    "Gestalt",
    "Jungiana",
    "Lacaniana",
    "Analítico-Comportamental",
    "Psicodrama",
    "EMDR",
    "Cognitivo-Construtivista ",
  ];

  return (
    <Container id="service">
      <Title>Segmentos da Psicoterapia</Title>
      <InfoContent>
        <Image src={woman} />

        <ServicesContent>
            {services.map((service) => (
            <ServiceBox>{service}</ServiceBox>
            ))}
        </ServicesContent>
      </InfoContent>
    </Container>
  );
}
