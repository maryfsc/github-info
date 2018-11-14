import React, { Component } from 'react';
import GitHubUser from '../services/GitHubUser';

class SearchUser extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();

    GitHubUser.getByUsername(this.refs.username.value)
      .then((res) => this.props.updateUser(res.data));

    GitHubUser.getReposByUserName(this.refs.username.value)
      .then((res) => this.props.updateRepos(res.data));
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>GitHub Info</h1>
          <div className="row">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input 
                  type="text"
                  ref="username"
                  className="form-control"
                  placeholder="Ex: maryfsc"
                />
              </div>
              <button 
                type="submit"
                className="btn btn-primary">Buscar
              </button>
            </form>
          </div>
      </div>
    )
  }
}

export default SearchUser;