import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Details = () => {
    const { id } = useParams();
    // console.log(id);
    // const [details, setDetails] = useState([])
    const [specificDetail, setSpecificDetail] = useState({})
    // console.log(specificDetail);
    const details = [
        {
            "id": 1,
            "p_name": "Medicare",
            "image": "https://i.ibb.co/DtcCTjP/port.png",
            "description": "This is a medical website.Any claim here will find them the doctor they need",
            "tools": "HTML, CSS, BOOTSTRAP",
            "live": "https://stupefied-poitras-bbb0e6.netlify.app/",
            "code": "https://github.com/Programming-Hero-Web-Course3/healthcare-related-website-MdRokibulHasan"
        },
        {
            "id": 2,
            "p_name": "CarHaat",
            "image": "https://i.ibb.co/RDQWhz8/261173393-262681215923431-612617615193349802-n.png",
            "description": "This is a car selling site.From here anyone can buy the car of their choice.",
            "tools": "HTML, CSS, BOOTSTRAP, EXPRESS, MONGODB, FIREBASE, HEROKU",
            "live": "https://cars-haat.web.app/",
            "code": "https://github.com/MdRokibulHasan/CarsHaat-client-side"
        },
        {
            "id": 3,
            "p_name": "Adventure",
            "image": "https://i.ibb.co/MMjQKxX/261272169-623413515769594-397115758323997518-n.png",
            "description": "This is a travel insight from which anyone can pick the packages of their choice.",
            "tools": "HTML, CSS, BOOTSTRAP, EXPRESS, MONGODB, FIREBASE, HEROKU",
            "live": "https://toure-plane.web.app/home",
            "code": "https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-MdRokibulHasan"
        }
    ]
    /* useEffect(() => {
        fetch('output.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []);
    console.log(details); */
    useEffect(() => {
        if (details.length > 0) {
            const matchedData = details?.find(detail => detail.id == id)
            setSpecificDetail(matchedData);
        }

    }

        , [details]);

    return (
        <div className="container">
            <h1 className="m-5 text-center">MY Portfolio</h1>
            <div class="card" >
                <img src={specificDetail?.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h3>{specificDetail?.p_name}</h3>
                    <p class="card-text">{specificDetail?.description}</p>
                    <h6>Use echnology:<small> {specificDetail?.tools}</small></h6>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="m-2">
                        <a href={specificDetail?.live} className="mx-2" target="_blank">
                            <button className=" highlighted-btn">Live Site</button>
                        </a>
                    </div>
                    <div className="m-2">
                        <a href={specificDetail?.code} className="mx-2" target="_blank">
                            <button className=" highlighted-btn">Source Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center m-3">
                <Link to="/home">
                    <button className=" highlighted-btn">Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Details;