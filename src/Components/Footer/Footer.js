import React from 'react';

const Footer = () => {
    return (
        <div className="container mt-5">
            <hr />
            <div className="d-flex justify-content-between">

                <div className='colz-icon '>
                    <a href="https://www.facebook.com/rokibulhasan.anik2/" className="mx-2 social">
                        <i className="fa fa-facebook-square fa-2x"></i>
                    </a>
                    <a href="https://github.com/MdRokibulHasan" className="mx-2 social">
                        <i className="fa fa-github-square fa-2x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/md-rokibul-hasan-823921216/" className="mx-2 social">
                        <i className="fa fa-linkedin-square fa-2x"></i>
                    </a>
                    <a href="https://twitter.com/RokibulAnik" className="mx-2 social">
                        <i className="fa fa-twitter-square fa-2x"></i>
                    </a>
                </div>
                <div>
                    <p>Copyright © 2021. All Rights Reserved by Rokibul Hasan</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;