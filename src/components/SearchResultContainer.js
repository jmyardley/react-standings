import React, { Component } from "react";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.searchUsers();
    this.getStandings();
  }

  searchUsers = () => {
    API.search()
      .then(res => {
        var users = (res.data.results);
        this.setState({ results: users });
        console.log(users);
      })
      .catch(err => console.log(err));
  };

  getStandings = () => {
    API.getStandings()
      .then(res => {
        var standings = (res.data);
        console.log(standings);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchUsers();
  };

  render() {
    return (
      <div>
        <h1> Employees </h1>
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
