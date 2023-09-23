import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from 'styled-components';
import './Login.css';

const Input = styled.input`
margin: 10px;
border-radius: 6px;
background: #226364;
color: wheat;
`;

const Login = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='form'>
      <form ref={form} onSubmit={sendEmail}>
        <label>
        <span>Email:</span>
          <input type="email" name="eamil" />
        </label>
        <label>
          <span>Телефон:</span>
          <input type="number" name="number" />
        </label>
        <label>
         <span>Пароль:</span>
          <input type="password" name="password" />
        </label>
        <div className="send">
        <Input type="submit" value="Войти" />
        </div>
      </form>
    </div>
  )
}
export default Login;