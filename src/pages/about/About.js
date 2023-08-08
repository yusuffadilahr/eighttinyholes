import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio (for responsive video) */
`;

const VideoFrame = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const AboutPage = () => {
    const videoUrl = 'https://www.youtube.com/watch?v=-xlfUXbwfpU';

    return (
        <>
            <PageContainer>
                <h1 style={
                    {
                        fontFamily: 'arial',
                        fontSize: '2rem',
                        color: 'black',
                        marginBottom: '2rem'
                    }
                }>Our Video</h1>
                <VideoContainer>
                    <VideoFrame
                        url={videoUrl}
                        width="100%"
                        height="100%"
                        controls
                        autoplay
                    />
                </VideoContainer>
                <p style={
                    {
                        textAlign: 'justify',
                        fontFamily: 'times new roman',
                        fontSize: '1rem',
                        color: 'black',
                        marginTop: '2rem',
                        marginBottom: '2rem'
                    }
                }>
                    This video was recorded in 2022, showcasing the latest collection from Eight Tiny Holes, featuring their first article titled 'Murderer'. We extend our heartfelt thanks to Jams (@sevenjems) for their invaluable contribution in capturing this footage flawlessly. We truly appreciate their hard work and dedication. Respect!

                    We would also like to express our gratitude to our friends who assisted in the creation of this first article. We highly appreciate their support and contribution. Thank you so much for being a part of this journey.

                    After that statement, we would also like to add that the cooperation and contributions from our friends have been truly meaningful in creating this article. We genuinely appreciate their remarkable support and participation. Without them, we believe this achievement would not have been possible. Once again, thank you to all of our friends for their valuable contributions!
                </p>
            </PageContainer>
        </>
    );
};

export default AboutPage;