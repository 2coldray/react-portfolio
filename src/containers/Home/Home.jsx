import React from "react";
import "../../styles/Home.css";
import port from "../../images/port.png";
import {Route} from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 bg-light mx-auto mt-4">
          <h1 className="text-center">About Me</h1>
          <hr />
          <img src={port} alt="me" className="img-thumbnail float-left mr-2" />
          <div className="d-block">
            <p>
              Hello, my name is Rayshawn Bray. I am an aspiring Front End
              Software Developer from Atlanta, Georgia. I'm currently a
              full-time student at Georgia Institute of Technology in their Full
              Stack Web Development Coding Boot Camp. I have experience using
              HTML5, CSS, JavaScript, JQuery, Bootstrap, Materialze, MySql,
              Node, Express, MongoDB, React.js and have deployed applications
              live on the web.
            </p>
            <p>Let's connect! My information is below</p>
            <p>Email: raybray219@yahoo.com</p>
            <p>Phone Number: 678-697-1692</p>
            <p>Github:</p>
            <p>LinkedIn:</p>
            <p>Resume:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
