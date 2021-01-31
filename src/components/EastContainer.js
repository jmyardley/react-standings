import React, { Component } from "react";
import ResultList from "./ResultList";
import API from "../utils/API";

class EastContainer extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.getStandings();
  }


  getStandings = () => {
    API.getEastStandings()
      .then(res => {
        var standings = (res.data.api.standings);
        this.setState({ results: standings });

        console.log(standings);
      })
      .catch(err => console.log(err));
  };



  render() {
    return (
      <div>
        <hr/>
        <h4> Eastern Conference Standings </h4>
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default EastContainer;
