import React from 'react';
import logo from '../../assets/images/maltem.png';
import {Img, Head, Title} from './style';

const Header = () => {
    return (
        <Head>
        <Img src={logo} alt="Logo" />
        <Title>Giveaway by Maltem Africa</Title>
        </Head>
    )
}

export default Header;