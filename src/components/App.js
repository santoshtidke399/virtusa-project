import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import ViewCourses from "./ViewCourses";
import ViewTests from "./ViewTests";
import Leaderboard from "./Leaderboard";
import AboutUs from "./AboutUs";
import ViewSingleCourse from "./ViewSingleCourse";
import ViewSingleTest from "./ViewSingleTest";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/courses" component={ViewCourses} />
          <Route exact path="/tests" component={ViewTests} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/viewSingleCourse" component={ViewSingleCourse} />
          <Route exact path="/viewSingleTest" component={ViewSingleTest} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
