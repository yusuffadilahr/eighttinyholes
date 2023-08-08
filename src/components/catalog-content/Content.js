import React from 'react';
import styled from 'styled-components';
import photo3 from '../../assets/catalog3.jpg';

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
`;

const Caption = styled.div`
  font-family: times new roman, sans-serif;
  font-size: 20px;
  text-align: justify;
  margin-right: 20px; 
  
  @media (max-width: 768px) {
    font-size: 14px; /* Ukuran caption untuk tampilan hp */
  }
`;

const PhotoWithCaption = ({ imageUrl, caption }) => {
  return (
    <ImageContainer>
      <img src={imageUrl} alt="Gambar 1" width="50%" height="auto" />
      <Caption>{caption}</Caption>
    </ImageContainer>
  );
};

const Content = () => {
  return (
    <div>
      <h1 style={
        {
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px'
        }
      }>Drop 1 - Murderer</h1>
      <PhotoWithCaption imageUrl={photo3} caption="
      Murderer is the rad first drop from 8tinyholes brand, featuring a murderer ax-wielding design! Sewn up with premium 24s fabric and top-notch plastisol ink. 
      " />
    </div>
  );
};

export default Content;