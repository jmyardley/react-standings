import React, { Component } from "react";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.getStandings();
  }


  getStandings = () => {
    API.getStandings()
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
        <h1> teams </h1>
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
