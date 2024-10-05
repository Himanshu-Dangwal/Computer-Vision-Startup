import React from 'react';
import aboutImage from '../assets/about-image.jpg';
import '../styles/About.css';
import 'animate.css';

const About = () => {
    return (
        <section className="about">
            <div className="container text-center">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-5">
                        <img src={aboutImage} alt="About Us" className="img-fluid animate__animated animate__fadeInLeft" />
                    </div>
                    <div className="col-md-6 animate__animated animate__fadeInRight">
                        <h2>About VisionML</h2>
                        <p>At VisionML, we specialize in developing advanced solutions for businesses using computer vision and machine learning technologies. Our mission is to transform industries by harnessing the power of AI.</p>
                        <a href="/contact" className="btn btn-secondary btn-lg">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
