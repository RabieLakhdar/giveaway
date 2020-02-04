import React from "react";
import { Img, Container } from './style'
import logo from '../../assets/images/maltem.png';

function Footer() {
  return (
    <>
   
          <Container>
                    <Img src={logo} alt="Logo" />
                    <span>© 2020 Maltem africa</span>
                 
          </Container>
    </>
  );
}

export default Footer;