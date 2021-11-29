import React from 'react';
import AboutMe from '../AboutME/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import Service from '../Services/Service';
import Skill from '../Skills/Skill';
import Header from './Header/Header';
import Profile from './Profile';

const Home = () => {
    return (
        <div>
            <div><Header></Header></div>
            <div><Profile></Profile></div>

            <div>

                <AboutMe></AboutMe>
            </div>
            <div>
                <Skill></Skill>
            </div>
            <div> <Service></Service> </div>
            <div>
                <Portfolio></Portfolio>
            </div>
            <div>
                <ContactMe></ContactMe>
            </div>

        </div>
    );
};

export default Home;