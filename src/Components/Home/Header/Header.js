import React from 'react';
import { Nav, Navbar, Container } from 'react-router-dom';
import './Header.css'
const Header = () => {

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-static-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Rokibul Hasan</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contract Me</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;