import React from "react";
import emailjs from "emailjs-com";

import { Container, Text, TitleContent } from "./styles";

function FormSection() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cl0i0wh",
        "template_4u4ph62",
        e.target,
        "user_LC00qXgbGQyLouXWSJkzu"
      )

      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  }

  return (
    <Container id="message">
      <TitleContent>Quer fazer parte do nosso time ?</TitleContent>

      <Text>
        Aqui é o nosso primeiro contato juntos. Preencha todos os dados
        solicitados no site. Depois disso, passamos para a próxima fase.
      </Text>

      <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-lg-8 col-sm-12 form-group mx-auto">
            <label>Nome</label>
            <input
              type="text"
              className="form-control"
              required
              placeholder="Nome"
              name="name"
            />
          </div>
          <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              required
              placeholder="Informe o seu e-mail"
              name="email"
            />
          </div>

          <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
            <label>Mensagem</label>
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="8"
              required
              placeholder="Descreva sua dúvida/observação"
              name="message"
            ></textarea>
          </div>
          <div className="col-lg-8 col-sm-12 pt-3 mx-auto">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Me cadastrar"
            ></input>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default FormSection;
