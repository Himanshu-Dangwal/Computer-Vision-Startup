import React from 'react';
import aboutImage from '../assets/about-image.jpg';
import '../styles/About.css';
import 'animate.css';

const About = () => {
    return (
        <section className="about">
            <div className="container text-center">
                <div className="row align-items-center justify-content-between mb-5">
                    <div className="col-md-5">
                        <img src={aboutImage} alt="About Us" className="img-fluid animate__animated animate__fadeInLeft" />
                    </div>
                    <div className="col-md-6 animate__animated animate__fadeInRight">
                        <h2>About VisionML</h2>
                        <p>At VisionML, we specialize in developing advanced solutions for businesses using computer vision and machine learning technologies. Our mission is to transform industries by harnessing the power of AI.</p>
                        <a href="/contact" className="btn btn-secondary btn-lg mt-3">Contact Us</a>
                    </div>
                </div>

                {/* Our Mission Section */}
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <h3>Our Mission</h3>
                        <p>
                            Our mission is to revolutionize industries through AI-driven innovation. By delivering state-of-the-art computer vision and machine learning solutions, we aim to empower businesses with tools that improve efficiency, reduce operational costs, and unlock new revenue streams.
                        </p>
                    </div>
                </div>

                {/* Our Expertise Section */}
                <div className="row justify-content-between mt-5">
                    <div className="col-md-6 animate__animated animate__fadeInLeft">
                        <h3>Our Expertise</h3>
                        <p>
                            VisionML is backed by a team of experts in artificial intelligence, machine learning, and computer vision. Our expertise spans multiple industries, including healthcare, automotive, retail, and finance. We specialize in custom AI solutions that integrate seamlessly into your operations, delivering actionable insights and automation to optimize your business processes.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img src={aboutImage} alt="Our Expertise" className="img-fluid animate__animated animate__fadeInRight" />
                    </div>
                </div>

                {/* Core Values Section */}
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <h3>Our Core Values</h3>
                        <ul className="list-unstyled">
                            <li><strong>Innovation:</strong> We thrive on finding innovative solutions to real-world problems.</li>
                            <li><strong>Integrity:</strong> We operate with transparency and honesty in every project we undertake.</li>
                            <li><strong>Collaboration:</strong> Our team works closely with our clients to deliver solutions tailored to their unique needs.</li>
                            <li><strong>Excellence:</strong> We strive for excellence in every product and service we offer.</li>
                            <li><strong>Sustainability:</strong> We are committed to developing solutions that are not only efficient but also sustainable for the environment and society.</li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <h4>Ready to Transform Your Business?</h4>
                        <p>Contact us today to learn how VisionML can help you leverage AI and ML to stay ahead in the competitive market.</p>
                        <a href="/contact" className="btn btn-primary btn-lg">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
