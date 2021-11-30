import React from 'react';
import './AboutMe.css';
import aboutImage from '../../image/aboutme.jpg'

import { HashLink as Link } from 'react-router-hash-link';
const AboutMe = () => {
    return (
        <div className="container" id="about">
            <div className="row  ">
                <h1 className="about-text m-5">ABOUT ME</h1>
                <div className="col-md-6">
                    <img src={aboutImage} alt="" className="aboutme-image" />
                </div>
                <div className="col-md-6 ">
                    <div className="about-text">
                        <h6>Hi there !</h6>
                        <h5>I'm Rookibul Hasan, a Software Developer</h5>
                        <p>Hi!My name is Rokibul.I am a Web Developer, and I'm very passionate and dedicated to my work. With 1 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration from discussion and collaboration.</p>

                        <p>I enjoy every step of the design process, from discussion and collaboration from discussion and collaboration.

                        </p>
                    </div>
                    <div>
                        <Link to="#contact">
                            <button className=" highlighted-btn">Here Me</button>
                        </Link>
                        <Link to="#portfolio"><button className=" highlighted-btn">Portfolio</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;