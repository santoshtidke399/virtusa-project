import React, { Component } from "react";
import NavBar from "./NavBarMain";
import axios from "axios";
import lboardImage from "./css/assets/leaderboard.png";
import "./css/leaderboard.css";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.testId = "";
    this.renderTableHead = this.renderTableHead.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.getRows = this.getRows.bind(this);
  }

  componentDidMount() {
    axios
      .post("/getScores", {
        testId: this.testId,
      })
      .then((result) => {
        if (result.status === 200) {
          if (result.data.status === 301) {
            alert(result.data.response);
          } else if (result.data.status === 200) {
            this.setState({
              data: result.data,
            });
          }
        }
      });
    this.handleSort("score");
  }

  handleSort = (attribute) => {
    this.setState({
      data: this.state.data.sort((a, b) =>
        parseInt(a[attribute], 10) > parseInt(b[attribute], 10) ? -1 : 1
      ),
    });
  };

  renderTableHead = () => {
    return (
      <thead>
        <tr>
          <th style={{ width: "10%" }}>#</th>
          <th style={{ width: "70%" }}>Username</th>
          <th style={{ width: "20%" }}>Score</th>
        </tr>
      </thead>
    );
  };

  getRows = () => {
    const rows = this.state.data.map((row, index) => {
      return (
        <tr>
          <td>{index + 1}</td>
          <td>{row.username}</td>
          <td>{row.score}</td>
        </tr>
      );
    });
    return rows;
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="MainContainerLeaderboard">
          <div className="TitleBarLeaderboard">
            <div>
              <img id="title-img-l" src={lboardImage} alt="lboard-img"></img>
            </div>
            <div className="row">
              <h1>Leaderboard</h1>
            </div>
          </div>
          <div className="Lboard">
            <div className="Search">
              <form class="pure-form">
                <input
                  type="text"
                  style={{ width: "50%" }}
                  placeholder="Enter Test Id"
                  class="pure-input-rounded"
                />
                <button type="submit" class="pure-button">
                  Search
                </button>
              </form>
            </div>
            <table style={{ width: "80%" }} className="RankTable">
              {this.renderTableHead()}
              <tbody>{this.getRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
