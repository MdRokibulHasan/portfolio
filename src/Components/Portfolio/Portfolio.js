import React from 'react';
import live1 from '../../image/port1.PNG';
import live2 from '../../image/port2.PNG';
import live3 from '../../image/port.PNG';
const Portfolio = () => {
    return (
        <div className="container mt-5">
            <h1 className="m-5">MY WORKS</h1>
            <div className="row ms-3">
                <div className="col-md-4">
                    <div class="card" >
                        <img src={live3} class="card-img-top" alt="..." style={{ height: "250px" }} />
                        <div class="card-body">
                            <h5>Medicare</h5>
                            <p class="card-text">This is a medical website.
                                Any claim here will find them the doctor they need</p>
                            <p>----- HTML, CSS, BOOTSTRAP</p>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" >
                        <img src={live1} class=" img-fluid" alt="..." style={{ height: "250px" }} />
                        <div class="card-body">
                            <h5>CarHaat</h5>
                            <p class="card-text">This is a car selling site.
                                From here anyone can buy the car of their choice</p>
                            <p>----- HTML, CSS, BOOTSTRAP, EXPRESS, MONGODB, FIREBASE, HEROKU</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" >
                        <img src={live2} class="card-img-top" alt="..." style={{ height: "250px" }} />
                        <div class="card-body">
                            <h5>Adventure</h5>
                            <p class="card-text">This is a travel insight from which anyone can pick the packages of their choice.</p>
                            <p>----- HTML, CSS, BOOTSTRAP, EXPRESS, MONGODB, FIREBASE, HEROKU</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;