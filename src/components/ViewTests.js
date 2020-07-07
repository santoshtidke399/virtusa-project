import React, { Component } from "react";
import NavBar from "./NavBarMain";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import axios from "axios";
import testsImage from "./css/assets/test.png";
import "./css/tests.css";

class ViewTests extends Component {
  constructor(props) {
    super(props);
    this.renderTests = this.renderTests.bind(this);
    this.renderViewSingleTest = this.renderViewSingleTest.bind(this);
  }

  tests = {
    body: [
      {
        testId: 123,
        name: "OOP",
        author: "AK",
        score: "20",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbqLFH67Ecqu4JLKpCY_ZEnoViA1ai9gqHxA&usqp=CAU",
        syllabus: ["OOPs Intro", "Features"]
      },
      {
        testId: 456,
        name: "DSA",
        author: "AK2",
        score: "100",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRU8RPRMXEY7K1Vmeq2oTVWKb5304O1EPVpqA&usqp=CAU",
        syllabus: ["Trees", "Graphs"]
      }
    ]
  };

  renderViewSingleTest = (e) => {
    this.props.history.push({pathname:'/viewSingleTest',state:{test: this.tests.body[e.target.id]}})
 }
  // componentDidMount() {
  //   axios.post("/getTests").then((result) => {
  //     if (result.status === 200) {
  //       if (result.data.status === 301) {
  //         alert(result.data.response);
  //       } else if (result.data.status === 200) {
  //         this.tests.body = result.data.body;
  //       }
  //     }
  //   });
  // }

  renderTests = () => {
    if (this.tests.body.length !== 0) {
      const test = this.tests.body.map((t, index) => {
        return (
          <div className="eachTest" key={index}>
            <Card>
              <Card.Img src={t.img}></Card.Img>
              <Card.Body>
                <Card.Title>{t.name}</Card.Title>
                <Card.Text>Creator: {t.author}</Card.Text>
                <Card.Text>Score: {t.score}</Card.Text>
                <Button id={index} onClick={this.renderViewSingleTest}>
                View Test
              </Button>
              </Card.Body>
            </Card>
          </div>
        );
      });
      return <div className="Sub row">{test}</div>;
    } else {
      return (
        <div className="SubClass">
          <Card>
            <Card.Body>
              <Card.Text>No Tests added yet</Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="MainContainerTests">
          <div className="TitleBarTests">
            <div>
              <img id="title-img-t" src={testsImage} alt="testview-img"></img>
            </div>
            <div>
              <h1>Browse Tests/Exams</h1>
            </div>
          </div>
          <div id="Tests">
            {this.renderTests()}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewTests;
