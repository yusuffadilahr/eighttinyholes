import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoBackground from './components/VideoBackground/VideoBg';
import StyledNavBar from './components/navbar/Navbar';
import BodyContent from './components/body-content/BodyContent';
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';
import AboutPage from './pages/about/About';
import NavbarBlack from './components/navbar/NavbarBlack';
import Content from './components/catalog-content/Content';
import Catalog from './pages/catalog/Catalog';
import CatalogHome from './components/catalog-content/CatalogHome';
import BodyContentHome from './components/body-content/BodyContentHome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <StyledNavBar />
            <VideoBackground />
            <BodyContentHome />
            <CatalogHome />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <NavbarBlack />
            <br /><br /><br /><br /><br />
            <BodyContent />
            <Content />
            <AboutPage />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Contact />
          </>
        } />
        <Route path="/catalog" element={
          <>
            <NavbarBlack /><br /><br /><br /><br /><br />
            <Catalog />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;