import React, { Component } from "react";
import NavBar from "./NavBarMain";
import "./css/viewSingleCourse.css";

class ViewSingleCourse extends Component {
  constructor(props) {
    super(props);
    this.renderCourseInfo = this.renderCourseInfo.bind(this);
  }

  course = this.props.location.state.course;

  renderCourseInfo = () => {
    return (
      <div>
        <div className="HeadTag">
          Author: {this.course.author}
          &nbsp; &nbsp; &nbsp; 
          Duration: {this.course.duration}
        </div>
        <div className="CourseContents">
            <br></br>
          Syllabus:
          <ul>
            {this.course.contents.chapters.map((chapter, index) => {
              return (
                <div>
                  <li key={index}> {chapter.chapterName} </li>
                  <ul>
                  {chapter.sections.map((section, index2) => {
                    return <li key={index2}> {section} </li>;
                  })}
                  </ul>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="MainContainerViewSingleCourse">
          <div className="TitleBarSingleCourse">
            <div>
              <img
                id="title-img-sc"
                src={this.course.img}
                alt="courseview-img"
              ></img>
            </div>
            <div>
              <h1>{this.course.name}</h1>
            </div>
          </div>
          <div id="SingleCourse">{this.renderCourseInfo()}</div>
        </div>
      </div>
    );
  }
}

export default ViewSingleCourse;
