import React from "react";
import { Container, Text } from "./style";

import { FiChevronRight } from "react-icons/fi";

export function LearnMore({color = '#516F99'}) {
  return (
    <Container color={color}>
      <Text >Saiba mais</Text>
      <FiChevronRight />
    </Container>
  );
}
