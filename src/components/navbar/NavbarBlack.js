import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './nav.css';

const Nav = styled.nav`  
background-color: black;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 999; /* Pastikan navbar berada di atas elemen lain */
/* Gaya lain yang Anda perlukan */
`;

const NavBarContainer = styled.div`
  /* Gaya untuk NavBarContainer */
`;

const LogoLink = styled(Link)`
  font-family: 'NamaFontKustom', sans-serif;
  color: #fff;
  border-radius: 50px;
  padding: 0.8rem 1rem;
  font-size: 1rem;
`;

const NavLink = styled(Link)`
  font-family: 'NamaFontKustom', sans-serif;
  color: #fff;
`;

const MobileMenuButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
  }
`;

const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 20px;
  cursor: pointer;
  div {
    width: 100%;
    height: 3px;
    background-color: #fff;
    margin: 3px 0;
    transition: all 0.3s;
  }
`;

const MobileMenu = styled.ul`
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    bottom: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 1;
    background-color: rgb(62, 61, 61);
    animation: ${({ isOpen }) => (isOpen ? "slideIn" : "slideOut")} 0.3s ease;
    border-radius: 20px 20px 0 0;

    li {
      padding: 1rem 0;
      border-bottom: 1.5px solid #393838;
      width: 80%;
      align-items: center;
      margin: 0 auto;
    }

    a {
      text-decoration: none;
      color: #fff;
    }
  }

  @keyframes slideIn {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slideOut {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const navItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Catalog", link: "/catalog" },
  { label: "Contact", link: "/contact" },
];


const Logo = styled.img`
  width: 35px; // Atur lebar sesuai kebutuhan
  height: auto; // Atur tinggi sesuai kebutuhan, jika Anda ingin logo tetap aspek rasionya
  // Gaya lain untuk logo jika diperlukan
`;

const NavbarBlack = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = () => setIsOpen(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <Nav>
      <NavBarContainer className="navbar-container">
        <LogoLink to="/" onClick={closeMobileMenu}>
          <Logo src="https://png.pngtree.com/png-vector/20190321/ourlarge/pngtree-vector-globe-icon-png-image_855070.jpg" alt="Logo" />
        </LogoLink>
        <MobileMenuButton onClick={toggleMobileMenu}>
          <HamburgerIcon>
            <div />
            <div />
            <div />
          </HamburgerIcon>
        </MobileMenuButton>
        <MobileMenu isOpen={isOpen}>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.link} onClick={closeMobileMenu}>{item.label}</NavLink>
            </li>
          ))}
        </MobileMenu>
      </NavBarContainer>
    </Nav>
  );
};

export default NavbarBlack