import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

import "../styles/contacto.css";

const SERVICE_ID = "service_8odnqj6"
const TEMPLATE_ID = "template_ifgiakn"
const USER_ID = "gC4tUjuxBRdy0YPjN"

const Contacto = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
          title: "¡Mensaje enviado!"
        })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
          title: "Vaya, algo fué mal",
          text: error.text,
                })
            });
        e.target.reset()
    };
    return (
        <>
        <div className="banner">
        </div>
        <div className="contacto">
            <Form onSubmit={handleOnSubmit}>
                <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    name='from_email'
                    placeholder='Email…'
                    required
                    icon='mail'
                    iconPosition='left'
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Nombre'
                    name='from_name'
                    placeholder='Nombre'
                    required
                    icon='user circle'
                    iconPosition='left'
                />
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Mensaje'
                    name='user_message'
                    placeholder='Mensaje...'
                    required
                />
                <Button type="submit" color="green">Enviar</Button>
            </Form>
        </div>
        </>
    );
}

export default Contacto;