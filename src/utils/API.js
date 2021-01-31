/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const USERSURL = "https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?inc=gender,name,email,cell,picture,dob&results=20";
const options = {
  method: 'GET',
  url: 'https://api-nba-v1.p.rapidapi.com/standings/standard/2020/conference/east',
  headers: {
    'x-rapidapi-key': 'fb0412970bmsh99992e8e57c8d0ep1e387djsn071f09822928',
    'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
  }
};
// Export an object with a "search" method that searches the Giphy API for the passedquer
export default {
  search: function(query) {
    return axios.get(USERSURL);
  },
  getStandings: function() {
    return axios.request(options);
  }
};
