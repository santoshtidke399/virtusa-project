import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";

class NavBarComponent extends Component {
  constructor(props) {
    super(props);
    this.redirectRegister = this.redirectRegister.bind(this);
    this.redirectLogin = this.redirectLogin.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }
  redirectRegister = () => {
    console.log("Redircting the register");
    this.props.history.push("/register");
  };

  redirectLogin = () => {
    console.log("Redirecting to login");
    this.props.history.push("/login");
  };
  renderButton = (userLogginStatus) => {
    switch (userLogginStatus) {
      case "Register":
        return (
          <Button
            className="pull-right"
            id="actionButton"
            onClick={this.redirectRegister}
          >
            Register
          </Button>
        );

      case "Login":
        return (
          <Button
            className="pull-right"
            id="actionButton"
            onClick={this.redirectLogin}
          >
            Login
          </Button>
        );
      default:
        return;
    }
  };
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/Dashboard">V-Academy</Navbar.Brand>
        <li></li>
        {this.renderButton(this.props.userLogginStatus)}
      </Navbar>
    );
  }
}
export default withRouter(NavBarComponent);
