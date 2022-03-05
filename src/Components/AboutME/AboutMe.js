import React from 'react';
import './AboutMe.css';
import aboutImage from '../../image/IMG_1294.png'

import { HashLink as Link } from 'react-router-hash-link';
const AboutMe = () => {
    return (
        <div className="container" id="about">
            <div className=" ">
                <h1 className="about-text m-5">ABOUT ME</h1>
               <div className="d-flex align-items-center ">
               <div className="col-md-6 d-flex justify-content-center">
                    <img src={aboutImage} alt="Image"  className=" aboutme-image" />
                </div>
                <div className="col-md-6 ">
                    <div className="about-text">
                        <h6>Hi there !</h6>
                        <h5>I'm Rookibul Hasan, a Web Designer and Developer</h5>
                        <p> I have completed my B.sc in SWE degree from the Department of Software Engineering of Daffodil International University. My keen interest in Software Engineering has enabled me to develop a good knowledge of Web Development, Along with my degree I complete javaScript,react,node JS and mongodb courses on Programing Hero.</p>

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
        </div>
    );
};

export default AboutMe;