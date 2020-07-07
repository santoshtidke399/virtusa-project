import React, { Component } from "react";
import axios from "axios";
import NavbarComponent from "./NavBarComponent";
import "./css/auth.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordReEntered: "",
    };
    this.change = this.change.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  change(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  checkCredentials = () => {
    if (
      this.state.username !== "" &&
      this.state.email !== "" &&
      this.state.password === this.state.passwordReEntered
    ) {
      return true;
    }
    return false;
  };
  submitForm = (e) => {
    e.preventDefault();
    if (this.checkCredentials) {
      alert("Please ensure both password are same");
      return;
    }
    console.log("Submit form invoked !");
    axios
      .post(
        "/register",
        {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        },
        this.headers
      )
      .then((result) => {
        if (result.status === 200) {
          alert("User successfully registered !");
        }
        console.log(result);
        // localStorage.setItem('jwt',result.data);
        // this.props.history.push("/Dashboard");
      });
  };
  render() {
    return (
      <div className="AuthContainer">
        <NavbarComponent userLogginStatus={"Login"} />
        <form
          id="custom-form"
          className="text-center Login.loginClass form-signin"
          onSubmit={(e) => this.submitForm(e)}
        >
          <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
          <input
            className="form-control"
            placeholder="Username"
            type="text"
            name="username"
            onChange={(e) => this.change(e)}
            value={this.state.username}
            required
            autoFocus
          />
          <input
            className="form-control"
            placeholder="Email address"
            type="email"
            name="email"
            onChange={(e) => this.change(e)}
            value={this.state.username}
            required
          />
          <input
            id="input-password"
            className="form-control"
            type="password"
            name="password"
            onChange={(e) => this.change(e)}
            value={this.state.password}
            required
            placeholder="Enter password"
          />
          <input
            className="form-control"
            type="password"
            name="passwordReEntered"
            onChange={(e) => this.change(e)}
            value={this.state.passwordReEntered}
            required
            placeholder="Re-enter password"
          />
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Register;
