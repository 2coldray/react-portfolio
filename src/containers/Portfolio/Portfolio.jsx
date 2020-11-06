import React from 'react';
import weather from "../../images/weather.png";
import noteTaker from "../../images/noteTaker.png";
import work from "../../images/work.png";
import "../../styles/Portfolio.css";


const Portfolio = () => {
    return (
        <div className="container mt-3 mb-2">
            <div className="row">
                <div className="col-sm-6 bg-light mx-auto">
                    <h1 className="text-center">Portfolio</h1>
                    <hr />
                    <div className="card text-center">
                        <div className="card-header text-center">
                            Weather Dashboard Application
                        </div>
                        <div className="card-body">
                           <img src={weather} alt="weather dashboard screenshot" className="pic" />
                        </div>
                        <div className="card-footer sticky text-center">
                            <a href={"https://github.com/2coldray/weather-dashboard"} className="link">Github Link</a>

                            <a href={"https://2coldray.github.io/weather-dashboard/"}>Deployed Application</a>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;