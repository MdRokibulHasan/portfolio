import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Home/Header/Header";

const Projects = () => {
  const [values, setValues] = useState([]);
  const [lodding, setLodding] = useState(true);
  const history = useHistory();
  useEffect(() => {
    fetch("output.json")
      .then((res) => res.json())
      .then((data) => setValues(data));
    setLodding(false);
  }, []);
  const handleDetails = (id) => {
    const uri = `/details/${id}`;

    history.push(uri);
  };
  return (
    <div className="container mt-5" id="portfolio">
      <Header />
      <h1 className="m-5 text-center">MY WORKS</h1>
      <div className="row ">
        {values?.map((value) => (
          <div className="col-md-4 ">
            <div class="card m-2">
              <img src={value.image} class="card-img-top" alt="..." style={{ height: "250px" }} />
              <div class="card-body">
                <h5>{value.p_name}</h5>
                {/*  <p class="card-text">This is a travel insight from which anyone can pick the packages of their choice.</p>
                      <p>----- HTML, CSS, BOOTSTRAP, EXPRESS, MONGODB, FIREBASE, HEROKU</p> */}
              </div>

              <button onClick={() => handleDetails(value.id)} id="portfolio-btn" style={{ padding: "10px" }}>
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
