import React from 'react';
import './Services.css'
const Service = () => {
    return (
        <div className="container">
            <div className=" row">
                <h1 className="m-5">MY SERVICES</h1>
                <div className="col-md-4">
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">Web Design</h5>
                            <p class="card-text">I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.</p>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">Web Development</h5>
                            <p class="card-text">I'm a developer, so I know how to create your website to run across devices using the latest technologies available.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">Mobile-friendly</h5>
                            <p class="card-text">A responsive design makes your website accessible to all users, regardless of their device.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;