import React from 'react';
import './BodyContent.css'
import Photo1 from '../../assets/IMG_0532.jpg'
import Photo2 from '../../assets/IMG_0540.jpg'
import Photo3 from '../../assets/IMG_0651.jpg'
import Photo4 from '../../assets/IMG_0698.jpg'
import Photo5 from '../../assets/IMG_0715.jpg'
import Photo6 from '../../assets/IMG_0695.jpg'

const BodyContent = () => {
    return (
        <div className="container">
            <div className="title">
                <h1>About Us</h1>
                <br />
                <div className="photo-grid">
                    <div className="photo-item">
                        <img src={Photo1} alt="Foto 1" />
                    </div>
                    <div className="photo-item">
                        <img src={Photo2} alt="Foto 2" />
                    </div>
                    <div className="photo-item">
                        <img src={Photo3} alt="Foto 3" />
                    </div>
                    <div className="photo-item">
                        <img src={Photo4} alt="Foto 4" />
                    </div>
                    <div className="photo-item">
                        <img src={Photo5} alt="Foto 4" />
                    </div>
                    <div className="photo-item">
                        <img src={Photo6} alt="Foto 4" />
                    </div>
                    <p>Eight Tiny Holes is a brand that was established in 2020 with one mission: to create their own sick gear to meet all the skateboarding needs. These guys are all about providing high-quality threads that are specifically designed to handle the gnarly of shredding on a skateboard. One thing that sets Eight Tiny Holes apart is their signature eight tiny holes, inspired by the bolts on a skateboard. They use tough materials that can handle the harshest beatings. The designs of Eight Tiny Holes are all about combining style with practicality and functionality, catering to the needs and preferences of skateboarders.</p>
                </div>
            </div>
        </div>
    );
};

export default BodyContent;