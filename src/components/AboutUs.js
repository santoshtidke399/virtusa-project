import React, { Component } from "react";
import NavBar from "./NavBarMain";
import aboutUsImage from "./css/assets/aboutUs.png";
import "./css/aboutUs.css";
import ReactImage from "./css/assets/reactJS.png";
import JavaSpringImage from "./css/assets/spring.png";
import MySQLImage from "./css/assets/mysql.png";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="MainContainerAboutUs">
          <div className="TitleBarAboutUs">
            <div>
              <img id="title-img-a" src={aboutUsImage} alt="aboutUs-img"></img>
            </div>
            <div>
              <h1>About Us</h1>
            </div>
          </div>
          <div className="About">
            <p className="AU">
              <b>Project Overview --</b> <br></br>
              We are an upcoming e-learning service provider in the country for
              various school curriculums. <br></br>Currently the systems possess
              the basic provisions to --<br></br>
              <ul>
                <li>View the curriculum and respective course content</li>
                <li>Upload Course content in terms of videos</li>
                <li>Practice tests and mock tests</li>
              </ul>
              Our services are well received due to the rich content and
              friendly video courses. Its our turn to make our system robust
              enough to make it more easily accessible. We are planning to
              expand our services in the below modes and develop below features
              to make it more user friendly with rich content.<br></br>
              <li>Expand the courses for competitive exams</li>
              <li>Online registrations, packages and payments</li>
              <li>Online forum for teachers and students to interact</li>
              <li>Analyze with real time progress and updates to parents</li>
              <li>
                Dashboards of Rank holders across states for a given curriculum
              </li>
            </p>
            <h2>Technology used</h2>
            <div className="Technology">
              <div className="Row1">
                <div>
                  <img className="techimg" src={JavaSpringImage} alt="" />
                </div>
                <div>
                  <img className="techimg" src={ReactImage} alt="" />
                </div>
                <div>
                  <img className="techimg" src={MySQLImage} alt="" />
                </div>
              </div>
            </div>
            <div className="groupMember">
              <h3>Group Members</h3>
              <ul>
                <li>Aditya Kulkarni</li>
                <li>Santosh Tidke</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
