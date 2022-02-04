import { Container, DepoimentWrapper, Image, InfoDepoiment, Name, Text } from "./style";
import logo from "./../../assets/brand/blackLogo.png";
import client from "./../../assets/images/client.png";
import { NavButton } from "../NavButton";

export function Depoiment() {
  return (
    <Container>
      <Image src={client} width="50%" height="100%" />
      <DepoimentWrapper>
        <Image src={logo} width="108px" height="2.5rem" />
        <InfoDepoiment>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis morbi
            id sed viverra turpis et diam, velit. Pharetra, sem porta urna,
            curabitur. Neque ipsum tellus sed consectetur rutrum.
          </Text>
          <Name>Cooper, Kristin</Name>
        </InfoDepoiment>
        <NavButton />
      </DepoimentWrapper>
    </Container>
  );
}
