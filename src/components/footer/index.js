import React from "react";
import { Title, Img, Container } from './style'
import logo from '../../assets/images/maltem.png';

function Footer() {
  return (
    <>
   
          <Container>
                    <Img src={logo} alt="Logo" />
                    <Title>© 2020 Maltem africa</Title>
                 
          </Container>
    </>
  );
}

export default Footer;