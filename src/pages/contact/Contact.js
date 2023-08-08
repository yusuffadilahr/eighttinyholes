import React from 'react';
import { FaInstagram, FaWhatsapp, FaShoppingCart, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';
import Footer from '../../components/footer/Footer';
import NavbarBlack from '../../components/navbar/NavbarBlack';
import ProfileInfo from '../../components/profile-info/ProfileInfo';
import Logo from '../../assets/logo.jpg'

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LinkTreeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  padding: 2rem;
`;

const LinkCard = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 3px;
  transition: all 0.3s;
  background-color: black;
  color: white;

  @media (min-width: 768px) {
    width: 200px;
  }

  &:hover {
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const LinkIcon = styled.div`
  font-size: 2rem;
`;

const LinkTitle = styled.div`
  font-family: 'times new roman', sans-serif;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const SmallIcon = styled.a`
  font-size: 1.5rem;
  margin: 0 0.5rem;
  color: black;
`;

const Contact = () => {
  return (
    <>
      <PageContainer>
        <NavbarBlack />
        <br /><br /><br /><br /><br /><br />
        <ProfileInfo imageSrc={Logo} username="@8tinyholes" />
        <p style={
          {
            fontFamily: 'times new roman',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#000',
            textAlign: 'center',
            marginBottom: '1rem',
            textDecoration: 'none'
          }
        }> Order and Purchases🔽</p>
        <LinkTreeWrapper>
          <LinkCard href="https://www.instagram.com/8tinyholes">
            <LinkIcon>
              <FaInstagram />
            </LinkIcon>
            <LinkTitle>Instagram</LinkTitle>
          </LinkCard>
          <LinkCard href="https://wa.me/">
            <LinkIcon>
              <FaWhatsapp />
            </LinkIcon>
            <LinkTitle>Whatsapp</LinkTitle>
          </LinkCard>
          <LinkCard href="https://shopee.co.id/8tinyholes">
            <LinkIcon>
              <FaShoppingCart />
            </LinkIcon>
            <LinkTitle>Shopee</LinkTitle>
          </LinkCard>
          <LinkCard href="https://8tinyholes.bigcartel.com/">
            <LinkIcon>
              <FaShoppingCart />
            </LinkIcon>
            <LinkTitle>Big Cartel</LinkTitle>
          </LinkCard>
        </LinkTreeWrapper>
        <IconContainer>
          <SmallIcon href="https://www.youtube.com/@eighttinyholes">
            <FaYoutube />
          </SmallIcon>
          <SmallIcon href="https://www.instagram.com/8tinyholes">
            <FaInstagram />
          </SmallIcon>
          <SmallIcon href="https://wa.me/">
            <FaWhatsapp />
          </SmallIcon>
          <SmallIcon href="https://8tinyholes.bigcartel.com/">
            <FaShoppingCart />
          </SmallIcon>
        </IconContainer>
        <Footer />
      </PageContainer>
    </>


  );
};

export default Contact;