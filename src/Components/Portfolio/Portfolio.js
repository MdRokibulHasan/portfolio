import React, { useEffect, useState } from 'react';
// import live1 from '../../image/port1.PNG';
import './Portfolio.css';
import { useHistory } from 'react-router-dom';
const Portfolio = () => {
    const [values, setValues] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('output.json')
            .then(res => res.json())
            .then(data => setValues(data));
    }, []);
    const handleDetails = (id) => {
        const uri = `/details/${id}`

        history.push(uri);
    }
    return (
        <div className="container mt-5" id="portfolio">
            <h1 className="m-5">MY WORKS</h1>
            <div className="row ms-3">
                {
                    values?.map((value) => (
                        <div className="col-md-4">
                            <div class="card" >
                                <img src={value.image} class="card-img-top" alt="..." style={{ height: "250px" }} />
                                <div class="card-body">
                                    <h5>{value.p_name}</h5>
                                    {/*  <p class="card-text">This is a travel insight from which anyone can pick the packages of their choice.</p>
                                    <p>----- HTML, CSS, BOOTSTRAP, EXPRESS, MONGODB, FIREBASE, HEROKU</p> */}
                                </div>

                                <button onClick={() => handleDetails(value.id)} id="portfolio-btn">Details</button>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default Portfolio;