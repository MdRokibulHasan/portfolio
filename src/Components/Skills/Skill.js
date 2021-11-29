import React from 'react';

const Skill = () => {
    return (
        <div className="container mt-3 ">
            <h1 className="m-5">MY SKILLS</h1>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <span>HTML5</span>
                        <div className="progress my-1">
                            <div className="progress-bar fw-bloder" role="progressbar" style={{ width: "80%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">80%</div>
                        </div>
                    </div>
                    <div>
                        <span>Java Script</span>
                        <div className="progress my-1">
                            <div className="progress-bar fw-bloder" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                        </div>
                    </div>
                    <div>
                        <span>CSS3</span>
                        <div className="progress my-1">
                            <div className="progress-bar fw-bloder" role="progressbar" style={{ width: "70%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">70%</div>
                        </div>
                    </div>
                    <div>
                        <span>Node</span>
                        <div className="progress my-1">
                            <div className="progress-bar fw-bloder" role="progressbar" style={{ width: "50%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <span>Bootstrap</span>
                        <div className="progress my-1">
                            <div className="progress-bar fw-bloder" role="progressbar" style={{ width: "70%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">70%</div>
                        </div>
                    </div>
                    <div>
                        <span>React Js</span>
                        <div className="progress my-1">
                            <div className="progress-bar fw-bloder" role="progressbar" style={{ width: "50%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>
                    </div>
                    <div>
                        <span>Express</span>
                        <div className="progress my-1">
                            <div className="progress-bar fw-bloder" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                        </div>
                    </div>
                    <div>
                        <span>MongoDB</span>
                        <div className="progress my-1">
                            <div className="progress-bar fw-bloder" role="progressbar" style={{ width: "70%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">70%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;