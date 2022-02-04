import { Container, Icon, InfoWrapper, Title, Text } from "./style";

export const CardBenefits = ({icon, title, text}) => {
  return(
    <Container>
      <InfoWrapper>
        <Icon src={icon} />
        <Title>{title}</Title>
        <Text>{text}</Text>
      </InfoWrapper>
    </Container>
  )
}
