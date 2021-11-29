import React from 'react';
import './ContactMe.css';
import contactImage from '../../image/contact-shape.png';
const ContactMe = () => {
    return (
        <div className="container mt-5">
            <div className="row ">
                <h1 className="m-5">CONTACT WITH ME</h1>

                <div className="col-md-6 contact-form">
                    <div className="form-group mb-10">
                        <input type="text" name="name" id="name" placeholder="Your Name*" required />
                    </div>
                    <div className="form-group mb-10">
                        <input type="email" name="email" id="email" placeholder="Your Mail Address*" required />
                    </div>
                    <div className="form-group mb-10">
                        <input type="text" name="subject" id="subject" placeholder="Subject*" required />
                    </div>
                    <div className="form-group mb-35">
                        <textarea name="message" id="message" placeholder="Your Message*" defaultValue={""} required />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="site-btn m-3">Sent Message</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={contactImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactMe;