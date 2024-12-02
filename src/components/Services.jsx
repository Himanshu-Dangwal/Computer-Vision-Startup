import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles.css'; // Ensure you have this CSS file in your project

const Services = () => {
    return (
        <div>
            
            <main className="container mt-4">
                <section id="services" className="text-center">
                    <h2>Our Services</h2>
                    <p>At CV Solutions, we offer a range of cutting-edge computer vision services tailored to meet your needs:</p>
                </section>

                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="Images/obj-d.jpeg" className="card-img-top" alt="Object Detection" />
                            <div className="card-body">
                                <h5 className="card-title">Image to Text</h5>
                                <p className="card-text">Identify and classify objects in images and videos using state-of-the-art algorithms. Perfect for security, retail, and autonomous systems.</p>
                                <a href="/uploadphoto" className="btn btn-success btn-lg">Get Started</a>                          
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="Images/img-r.jpeg" className="card-img-top" alt="Image Recognition" />
                            <div className="card-body">
                                <h5 className="card-title">Image Recognition</h5>
                                <p className="card-text">Transform how you analyze images. Our solutions help businesses automate processes by accurately recognizing and categorizing visual content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="Images/vid-a.jpeg" className="card-img-top" alt="Video Analytics" />
                            <div className="card-body">
                                <h5 className="card-title">Video Analytics</h5>
                                <p className="card-text">Extract actionable insights from video feeds in real time. Ideal for security, traffic monitoring, and customer behavior analysis.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="custom-solutions" className="text-center mt-5">
                    <h2>Custom Solutions</h2>
                    <p>We understand that every business is unique. Our team can develop tailored computer vision solutions that fit your specific requirements. Contact us for more information!</p>
                    <a href="/contact" className="btn btn-primary mt-3">Get in Touch</a>
                </section>
            </main>

            
        </div>
    );
};

export default Services;
