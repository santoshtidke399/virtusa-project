import React, { Component } from "react";
import NavBar from "./HomeNavBar";
import "./css/home.css";
import courseImage from "./css/assets/viewCourses.png";
import testImage from "./css/assets/test.png";
import leaderboardImage from "./css/assets/leaderboard.png";
import aboutImage from "./css/assets/aboutUs.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.renderViewAndBuyCourses = this.renderViewAndBuyCourses.bind(this);
    this.renderTestsAndExams = this.renderTestsAndExams.bind(this);
    this.renderLeaderboard = this.renderLeaderboard.bind(this);
    this.renderAboutUs = this.renderAboutUs.bind(this);
  }

  renderViewAndBuyCourses = () => {
    console.log("Redirecting the courseView");
    this.props.history.push("/courses");
  };

  renderTestsAndExams = () => {
    console.log("Redirecting the testsView");
    this.props.history.push("/tests");
  };

  renderLeaderboard = () => {
    console.log("Redirecting the leaderboard");
    this.props.history.push("/leaderboard");
  };

  renderAboutUs = () => {
    console.log("Redirecting the aboutUs");
    this.props.history.push("/about");
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="HomeContainer">
          <div className="MainPart">
            <p className="MainText">
              We help learn different technologies with ease.
            </p>
          </div>
          <div className="SubPart">
            <div className="CourseHome">
              <img
                src={courseImage}
                className="courseButton"
                alt="courseview-img"
                onClick={this.renderViewAndBuyCourses}
              ></img>
              <div className="CourseContent">View/Buy Course</div>
            </div>
            <div className="TestHome">
              <img
                src={testImage}
                className="testButton"
                alt="test-img"
                onClick={this.renderTestsAndExams}
              ></img>
              <div className="TestContent">View Test/Exam</div>
            </div>
             <div className="LeaderboardHome">
              <img
                src={leaderboardImage}
                className="leaderboardButton"
                alt="leaderboard-img"
                onClick={this.renderLeaderboard}
              ></img>
              <div className="LeaderboardContent">Leaderboard</div>
            </div>
            <div className="AboutHome">
              <img
                src={aboutImage}
                className="aboutButton"
                alt="about-img"
                onClick={this.renderAboutUs}
              ></img>
              <div className="AboutContent">About Us</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
