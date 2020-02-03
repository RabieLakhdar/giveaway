import React from 'react';
import { Container, Title, Img } from './style';
import check from '../../assets/images/check.png';

const Card = () => {
 return (
  <Container>
      <Title> Your request will verified soon, Thank you!</Title>
      <Img src={check} />
  </Container>
 )
}
export default Card