import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ButtonWrapper, Container } from "./style";

export function NavButton() {
  return (
    <Container>
      <ButtonWrapper>
        <FiChevronLeft />
      </ButtonWrapper>
      <ButtonWrapper>
        <FiChevronRight />
      </ButtonWrapper>
    </Container>
  );
}
