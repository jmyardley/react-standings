/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const east = {
  method: 'GET',
  url: 'https://api-nba-v1.p.rapidapi.com/standings/standard/2020/conference/east',
  headers: {
    'x-rapidapi-key': 'fb0412970bmsh99992e8e57c8d0ep1e387djsn071f09822928',
    'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
  }
};

const west = {
  method: 'GET',
  url: 'https://api-nba-v1.p.rapidapi.com/standings/standard/2020/conference/west',
  headers: {
    'x-rapidapi-key': 'fb0412970bmsh99992e8e57c8d0ep1e387djsn071f09822928',
    'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
  }
};

export default {

  getEastStandings: function() {
    return axios.request(east);
  },
  getWestStandings: function() {
    return axios.request(west);
  }

};
