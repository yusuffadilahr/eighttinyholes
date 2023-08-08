import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; // Import library styled-components
import './nav.css'

// Buat komponen styled untuk Nav, Container, LogoLink, dan NavLink
const Nav = styled.nav`
background-color: transparent;
`;

const NavBarContainer = styled.div`
  /* Gaya untuk NavBarContainer */
`;

const LogoLink = styled(Link)`
  font-family: 'NamaFontKustom', sans-serif; /* Ganti 'NamaFontKustom' dengan nama font yang Anda ingin gunakan */
  /* Gaya lain untuk LogoLink jika diperlukan */
  color: #fff;
  border-radius: 50px;
  padding: 0.8rem 1rem;
  font-size: 1rem;
`;

const NavLink = styled(Link)`
  font-family: 'NamaFontKustom', sans-serif; /* Ganti 'NamaFontKustom' dengan nama font yang Anda ingin gunakan */
  /* Gaya lain untuk NavLink jika diperlukan */
  color: #fff;
`;

const MobileMenuButton = styled.div`
  /* Gaya untuk tombol menu pada perangkat seluler */
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const HamburgerIcon = styled.div`
  /* Gaya untuk ikon hamburger di sini */
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
  /* Gaya untuk menu pada perangkat seluler */
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
    /* Menggunakan ease untuk animasi yang lebih halus */
    /* Atur durasi dan jenis animasi sesuai kebutuhan */
    border-radius: 20px 20px 0 0;

    li {
      padding: 1rem 0;
      border-bottom: 1.5px solid #393838;
      width: 80%;
      align-items: center;
      margin: 0 auto;
    }

    /* Remove underline from the NavLink */
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

const StyledNavBar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [logoActive, setLogoActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = () => {
    setClick(false);
    setIsOpen(false);
  };

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
      setLogoActive(true);
      setIsOpen(isOpen);
      changeBackgroundImage("background-active.jpg");
    } else {
      setNavbar(false);
      setLogoActive(false);
      setIsOpen(isOpen);
      changeBackgroundImage("background-nonactive.jpg");
    }
  };

  const changeBackgroundImage = (imageName) => {
    // Ganti gambar latar belakang slideshow atau video background di sini
    // Misalnya, jika Anda menggunakan slideshow:
    // document.getElementById("slideshow").style.backgroundImage = `url(${imageName})`;

    // Atau jika Anda menggunakan video background:
    // document.getElementById("video-background").style.backgroundImage = `url(${imageName})`;
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <Nav className={navbar ? "navbar active" : "navbar"}>
      <NavBarContainer className="navbar-container">
        <LogoLink to="/" className={logoActive ? "logo active" : "logo"} onClick={closeMobileMenu}>8TINYHOLES </LogoLink>
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

export default StyledNavBar;