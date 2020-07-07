import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBarComponent";
import "./css/auth.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.headers = {
      "Content-Type": "application/json",
    };
    this.state = {
      username: "",
      password: "",
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }
  change(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submit(e) {
    e.preventDefault();
    axios
      .post(
        "/login",
        {
          username: this.state.username,
          password: this.state.password,
        },
        this.headers
      )
      .then((result) => {
        if (result.status === 200) {
          if (result.data.status === 301) {
            alert(result.data.response);
          } else if (result.data.status === 200) {
            localStorage.setItem("jwt", result.data.token);
            this.props.history.push("/Dashboard");
          }
        }
      })
      .catch((error) => {
        if (!error.status) {
          alert("Server is down !");
        }
      });
  }
  render() {
    return (
      <div className="AuthContainer">
        <NavBar userLogginStatus="Register" />
        <div>
          <form
            id="custom-form"
            className="login form-signin"
            onSubmit={(e) => this.submit(e)}
          >
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <input
              className="form-control"
              placeholder="Email address"
              type="email"
              name="username"
              onChange={(e) => this.change(e)}
              value={this.state.username}
              required
              autoFocus
            />
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={(e) => this.change(e)}
              value={this.state.password}
              required
              placeholder="Password"
            />
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
