import {
  Container,
  DepoimentWrapper,
  Image,
  InfoDepoiment,
  Menssage,
  Name,
} from "./style";

export function Depoiment({photo, name, message, occupation}) {
  return (
    <Container>
      <Image src={photo} width="30%" height="auto" />
      <DepoimentWrapper>
        <InfoDepoiment>
          <Menssage>
            {message}
          </Menssage>
          <Name>
            {name} – {occupation}
          </Name>
        </InfoDepoiment>
      </DepoimentWrapper>
    </Container>
  );
}
