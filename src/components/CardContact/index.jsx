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
    <Content>
      <InfoWrapper>
        <Subtitle>Ficou interresado ?</Subtitle>
        <TitleCard>Entre em contato conosco</TitleCard>
      </InfoWrapper>

      <InfoWrapper>
        <Label>Telefone</Label>
        <Text href="tel:+55 71 99606-7077">+55 71 99606-7077</Text>
      </InfoWrapper>

      <InfoWrapper>
        <Label>E-mail</Label>
        <Text href="mailto:conecta_terapia@gmail.com">
          conecta_terapia@gmail.com
        </Text>
      </InfoWrapper>
    </Content>
  );
}
