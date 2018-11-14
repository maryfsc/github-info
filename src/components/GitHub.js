import React, { Component } from 'react';
import SearchUser from './SearchUser';


class GitHub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      repos: []
    }

    this.updateUser = this.updateUser.bind(this);
    this.updateRepos = this.updateRepos.bind(this);
  }

  updateUser(user) {
    this.setState({ user })
  }

  updateRepos(repos) {
    this.setState({ repos })
  }

  render() {
    return (
      <div className="container-fluid">
        <SearchUser
          updateUser={this.updateUser}
          updateRepos={this.updateRepos} />
      </div>
    )
  }
}

export default GitHub;