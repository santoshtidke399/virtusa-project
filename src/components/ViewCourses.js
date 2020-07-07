import React, { Component } from "react";
import NavBar from "./NavBarMain";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import axios from "axios";
import coursesImage from "./css/assets/viewCourses.png";
import "./css/viewCourses.css";

class ViewCourses extends Component {
  constructor(props) {
    super(props);
    this.renderCourses = this.renderCourses.bind(this);
    this.renderViewSingleCourse = this.renderViewSingleCourse.bind(this);
  }
   
  courses = {
    body: [{
      "name":"OOP",
      "author":"AK",
      "duration":"3 weeks",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbqLFH67Ecqu4JLKpCY_ZEnoViA1ai9gqHxA&usqp=CAU",
      "contents":{
        "chapters":[{
          "chapterName":"OOPS Features",
          "sections":[
            "Inheritance",
            "Polymorphism",
            "..."
          ]
        },{
          "chapterName":"OOP Languages",
          "sections":[
            "C++",
            "Java",
            "...."
          ]
        }]
      }
    }
    ],
  };

  renderViewSingleCourse = (e) => {
     this.props.history.push({pathname:'/viewSingleCourse',state:{course: this.courses.body[e.target.id]}})
  }

  // componentDidMount() {
  //   axios.post("/getCourses").then((result) => {
  //     if (result.status === 200) {
  //       if (result.data.status === 301) {
  //         alert(result.data.response);
  //       } else if (result.data.status === 200) {
  //         this.courses.body = result.data.body;
  //       }
  //     }
  //   });
  // }

  renderCourses = () => {
    if (this.courses.body.length !== 0) {
      const course = this.courses.body.map((t, index) => {
        return (
        <div className="eachCourse">
          <Card>
            <Card.Img src={t.img}></Card.Img>
            <Card.Body>
              <Card.Title><h1>{t.name}</h1></Card.Title>
              <Card.Text>Author: {t.author}</Card.Text>
              <Card.Text>Duration: {t.duration}</Card.Text>
              <Button id={index} onClick={this.renderViewSingleCourse}>
                View Course
              </Button>
            </Card.Body>
          </Card>
        </div>
        );
      });
      return <div className="Sub row">{course}</div>;
    } else {
      return (
        <div className="SubClass">
          <Card>
            <Card.Body>
              <Card.Text>No Courses added yet</Card.Text>
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
        <div className="MainContainerCourses">
          <div className="TitleBarCourses">
            <div>
              <img
                id="title-img-c"
                src={coursesImage}
                alt="courseview-img"
              ></img>
            </div>
            <div>
              <h1>Browse Courses</h1>
            </div>
          </div>
          <div id="Courses">{this.renderCourses()}</div>
        </div>
      </div>
    );
  }
}

export default ViewCourses;
