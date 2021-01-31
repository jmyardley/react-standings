import axios from "axios";

const USERSURL = "https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?inc=gender,name,email,cell,picture,dob&results=20";

// Export an object with a "search" method that searches the Giphy API for the passedquer
export default {
  search: function(query) {
    return axios.get(USERSURL);
  }
};
