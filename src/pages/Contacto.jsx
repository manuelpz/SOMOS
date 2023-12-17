import React from "react"
import emailjs from "emailjs-com"
import { Form, Input, TextArea } from "semantic-ui-react"
import Swal from "sweetalert2"
import Headers from "../components/Headers"

import "../styles/contacto.css"

const SERVICE_ID = "service_y4b2hap"
const TEMPLATE_ID = "template_ifgiakn"
const USER_ID = "gC4tUjuxBRdy0YPjN"

const Contacto = () => {
  const NUMERO_DE_TELEFONO = "tel:624007966"
  const TELEFONO_OFICIAL = 624007966
  const handleOnSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text)
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
        })
      },
      (error) => {
        console.log(error.text)
        Swal.fire({
          icon: "error",
          title: "Vaya, algo fué mal",
          text: error.text,
        })
      }
    )
    e.target.reset()
  }
  return (
    <>
      <Headers
        title="Contacto - SOMOS A3 Campaña contra el cáncer infantil"
        description="¡Contáctanos! A través de esta página podrás ponerte en contacto via email o teléfono con nosotros y realizar las gestiones necesarias, como pedir información sobre la campaña que realizamos, pedir información sobre los productos, etc. ¡Te responderemos con la mayor brevedad posible!"
      />
      <div className="content">
        <h1>
          <p className="text-center text-3xl !mt-16 !mb-16 text-uppercase"><b>¡Ponte en contacto con nosotros!</b></p>
        </h1>
        <div className="contacto">
          <div className="contact">
            <div>
              <h2>
                <p className="text-center font-bold text-uppercase">Escríbenos</p>
              </h2>
              <Form className="md:ml-16"
                onSubmit={handleOnSubmit}>
                <Form.Field
                  id="form-input-control-email"
                  control={Input}
                  label="Email"
                  name="from_email"
                  placeholder="Email…"
                  icon="mail"
                  iconPosition="left"
                  className="md:!mr-16 md:!ml-16 !mr-4"
                  required
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Nombre"
                  name="from_name"
                  placeholder="Nombre"
                  icon="user circle"
                  iconPosition="left"
                  className="md:!mr-16 md:!ml-16 !mr-4"
                  required
                />
                <Form.Field
                  id="form-textarea-control-opinion"
                  control={TextArea}
                  label="Mensaje"
                  name="user_message"
                  placeholder="Mensaje..."
                  className="md:!mr-16 md:!ml-16 !mr-4"
                  required
                />
                <div className="grid justify-center">
                  <button className="botonContacto h-2/3" type="submit">
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg
                          height="20"
                          width="20"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span className="text-lg">Enviar</span>
                  </button>
                </div>
              </Form>
            </div>
            <div>
              <h2 className="text-center font-bold mb-10 text-uppercase">Llámanos </h2>
              <p className="text-center text-lg">
                Horario de Lunes a Viernes<br /><br /> <u>Mañanas</u>:{" "}
                <b>09:30</b> a <b>14:00</b> <br /> <u>Trades</u>: <b>16:00</b> a{" "}
                <b>20:00</b>
              </p>
              <div className="telefonoConjunto">
                <img
                  className="telefonoIcono"
                  src="/contacto-images/telefono.png"
                  alt="icono de un telefono"
                />
                <p className="telefono">
                  <b>Teléfono:</b>{" "}
                  <a href={NUMERO_DE_TELEFONO}>{TELEFONO_OFICIAL}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacto
