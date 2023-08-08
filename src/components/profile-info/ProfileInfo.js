import React from "react";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.img`
  width: 80px; /* Sesuaikan ukuran foto profil sesuai kebutuhan */
  height: 80px; /* Sesuaikan ukuran foto profil sesuai kebutuhan */
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;

const Username = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  font-family: 'montserrat', sans-serif;
  text-decoration: none;
`;

const ProfileInfo = ({ imageSrc, username }) => {
  return (
    <ProfileWrapper>
      <ProfileImage src={imageSrc} alt="Profile" />
      <Username href="https://www.instagram.com/8tinyholes">{username}</Username>
    </ProfileWrapper>
  );
};

export default ProfileInfo;