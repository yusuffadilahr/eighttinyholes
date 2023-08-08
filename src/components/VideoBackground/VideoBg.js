import React from 'react'
import Videos from '../../assets/backgrounds.MP4'
import PosterImage from '../../assets/IMG_8461.PNG'
import './videoBg.css'


const VideoBackground = () => {
    return (
        <div className='main'>
            <video poster={PosterImage} playsInline autoPlay loop muted>
                <source src={Videos} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='content'>
                <div className='navigation-buttons'>
                    <a href='/about'>About</a>
                    <a href='/catalog'>Catalog</a>
                    <a href='/contact'>Contact</a>
                    {/* Tambahkan tombol navigasi lainnya di sini */}
                </div>
            </div>
        </div>
    )
}

export default VideoBackground
