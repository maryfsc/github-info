import axios from 'axios';

var GitHubUser = {
  getByUsername: function (username) {
    return axios.get('https://api.github.com/users/' + username);
  },
  getReposByUserName: function (username) {
    return axios.get('https://api.github.com/users/' + username + '/repos');
  }
}

export default GitHubUser;