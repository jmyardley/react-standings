import React, { Component } from "react";
import ResultList from "./ResultList";
import API from "../utils/API";

class WestContainer extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.getStandings();
  }


  getStandings = () => {
    API.getWestStandings()
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
        <h4> Western Conference Standings </h4>
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default WestContainer;
