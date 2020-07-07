import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { withRouter } from "react-router";

class NavBarMain extends Component {
  constructor(props) {
    super(props);
    this.renderViewAndBuyCourses = this.renderViewAndBuyCourses.bind(this);
    this.renderTestsAndExams = this.renderTestsAndExams.bind(this);
    this.renderDiscussionForum = this.renderDiscussionForum.bind(this);
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

  renderDiscussionForum = () => {
    console.log("Redirecting the discussionForum");
    this.props.history.push("/discussion");
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
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/Dashboard">V-Academy</Navbar.Brand>
      </Navbar>
    );
  }
}
export default withRouter(NavBarMain);
