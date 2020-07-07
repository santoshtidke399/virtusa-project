import React, { Component } from "react";
import NavBar from "./NavBarMain";
import "./css/viewSingleTest.css";
import Button from "react-bootstrap/Button";

class ViewSingleTest extends Component {
  constructor(props) {
    super(props);
    this.renderTestInfo = this.renderTestInfo.bind(this);
  }

  test = this.props.location.state.test;

  renderTestInfo = () => {
    return (
      <div>
        <div className="HeadTag">
          Author: {this.test.author}
          &nbsp; &nbsp; &nbsp; 
          Score: {this.test.score}
        </div>
        <div className="TestContents">
            <br></br>
          Syllabus:
          <ul>
            {this.test.syllabus.map((t, index) => {
              return (
                <div>
                  <li key={index}> {t} </li>
                </div>
              );
            })}
          </ul>
          <Button>Buy Test</Button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="MainContainerViewSingleTest">
          <div className="TitleBarSingleTest">
            <div>
              <img
                id="title-img-st"
                src={this.test.img}
                alt="testview-img"
              ></img>
            </div>
            <div>
              <h1>{this.test.name}</h1>
            </div>
          </div>
          <div id="SingleTest">{this.renderTestInfo()}</div>
        </div>
      </div>
    );
  }
}

export default ViewSingleTest;
