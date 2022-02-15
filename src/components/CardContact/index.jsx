import {
  Content,
  InfoWrapper,
  Label,
  Subtitle,
  Text,
  TitleCard,
} from "./style";

export function CardContact() {
  return (
    <Content id="contato">
      <InfoWrapper>
        <Subtitle>Ficou interresado ?</Subtitle>
        <TitleCard>Entre em contato conosco</TitleCard>
      </InfoWrapper>

      <InfoWrapper>
        <Label>Telefone</Label>
        <Text href="tel:+55 79 99988-2880">+55 (79) 99988-2880</Text>
        <Text href="tel:+55 71 99606-7077">+55 (71) 99606-7077</Text>
      </InfoWrapper>

      <InfoWrapper>
        <Label>E-mail</Label>
        <Text href="mailto:contato@concectapessoas.com.br">
          contato@concectapessoas.com.br
        </Text>
      </InfoWrapper>
    </Content>
  );
}
