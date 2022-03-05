// import { Button } from 'bootstrap';
import React from 'react';
import Typical from 'react-typical';
import profile from '../../image/Md-Rokibul.png';
import './Profile.css';
const Profile = () => {
    return (
        <div className="container">
            <div className="profile-parent row">
                <div className="profile-details col-md-6">
                    <div className="colz m-3">
                        <div className='colz-icon '>
                            <a href="https://www.facebook.com/rokibulhasan.anik2/" className="mx-2 " target="_blank">
                                <i className="fa fa-facebook-square fa-2x"></i>
                            </a>
                            <a href="https://github.com/MdRokibulHasan" className="mx-2" target="_blank">
                                <i className="fa fa-github-square fa-2x"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/md-rokibul-hasan-823921216/" className="mx-2" target="_blank">
                                <i className="fa fa-linkedin-square fa-2x"></i>
                            </a>
                            <a href="https://twitter.com/RokibulAnik" className="mx-2" target="_blank">
                                <i className="fa fa-twitter-square fa-2x"></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {""}
                            Hello, I'M
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Rokibul Hasan",
                                        1000,
                                        "Full Stack Developer ",
                                        1000,
                                    ]}
                                />

                            </h1>
                            <span className="profile-role-tagline">I am a Web Designer and Developer . I can provide clean code and pixel perfect design.
                                I also make website more & more interactive with web animations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-optins">
                        {/*  <button className="btn primary-btn">
                            {" "}
                            Hire Me{""}
                        </button> */}
                        <a href='MDROKIBULHASANResume.pdf' download=' MDROKIBULHASANResume.pdf'>

                            <button className=" highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={profile} alt="" className="profile-image mt-3"  />

                </div>
            </div>

        </div >
    );
};

export default Profile;