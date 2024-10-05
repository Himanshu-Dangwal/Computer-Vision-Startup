import React from 'react';
import '../styles/Home.css';
import homeImage from '../assets/home-image.jpg';
import 'animate.css';

const Home = () => {
    return (
        <section className="home">
            <div className="container text-center">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6 animate__animated animate__fadeInLeft">
                        <h1 className="display-4">Revolutionizing AI Solutions</h1>
                        <p className="lead">Delivering cutting-edge computer vision and machine learning technologies for businesses worldwide.</p>
                        <a href="/about" className="btn btn-primary btn-lg">Learn More</a>
                    </div>
                    <div className="col-md-5">
                        <img src={homeImage} alt="AI Technologies" className="img-fluid animate__animated animate__fadeInRight" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
