import { CardBenefits } from "../CardBenefits";
import { ContentCardBenefits, Divider } from "./styles";

import home from "./../../assets/icons/home.svg";
import star from "./../../assets/icons/star.svg";
import list from "./../../assets/icons/list.svg";
import users from "./../../assets/icons/users.svg";

export function BenefitsSection() {
  return (
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
        text="Profissionais especializados e certificados, selecionados criteriosamente pela equipe Conect@."
      />
      <Divider />
      <CardBenefits
        icon={users}
        title="Diferentes especialidades"
        text="Diversas opções, entre Psicanálise, Cognitivo-comportamental, Gestalt, Jungiana, Lacaniana e muito mais."
      />
      <Divider />
      <CardBenefits
        icon={list}
        title="Redes Socais"
        text="Entregamos conteúdos transformadores, inspiradores e motivadores para o seu desenvolvimento."
      />
    </ContentCardBenefits>
  );
}
