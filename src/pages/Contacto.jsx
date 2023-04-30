import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

import "../styles/contacto.css";

const SERVICE_ID = "service_8odnqj6";
const TEMPLATE_ID = "template_ifgiakn";
const USER_ID = "gC4tUjuxBRdy0YPjN";

const Contacto = () => {
  const NUMERO_DE_TELEFONO = 624007966;
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Vaya, algo fué mal",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="content">
      <h1>
        <p className="centered">
          <i>¿Hablamos?</i>
        </p>
        <p className="centered">
          <b>¡Ponte en contacto con nosotros!</b>
        </p>
      </h1>
      <div className="contacto">
        <div className="contact">
          <div>
            <h2>
              <b className="contactanos">Escríbenos</b>
            </h2>
            <Form onSubmit={handleOnSubmit}>
              <Form.Field
                id="form-input-control-email"
                control={Input}
                label="Email"
                name="from_email"
                placeholder="Email…"
                required
                icon="mail"
                iconPosition="left"
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Nombre"
                name="from_name"
                placeholder="Nombre"
                required
                icon="user circle"
                iconPosition="left"
              />
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                label="Mensaje"
                name="user_message"
                placeholder="Mensaje..."
                required
              />
              <Button type="submit" color="green">
                Enviar
              </Button>
            </Form>
          </div>
          <div>
            <h2>
              <b className="contactanos">Llámanos</b>
            </h2>
            <p className="disponibilidad"><i>Lunes</i> a <i>Viernes</i> <br /> <u>Mañanas</u>: <b>09:30</b> a{" "}
              <b>14:00</b> <br/> <u>Trades</u>: <b>16:00</b> a <b>20:00</b>
            </p>
            <div className="telefonoConjunto">
              <img
                className="telefonoIcono"
                src="/contacto/telefono.png"
                alt="icono de un telefono"
              />
              <p className="telefono">
                <b>Teléfono:</b>{" "}
                <a href={NUMERO_DE_TELEFONO}>
                  {NUMERO_DE_TELEFONO}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
