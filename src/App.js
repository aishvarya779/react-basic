import React, { Component } from 'react';
import axios from 'axios';

import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false
    };
  }

  getUsers() {
    this.setState({ loading: true });
    axios('https://randomuser.me/api/?nat=US&results=5').then(response =>
      this.setState({ users: response.data.results, loading: false })
    );
    // .then(response => {
    //   console.log(response);
    // });
  }
  componentWillMount() {
    this.getUsers();
  }
  render() {
    return (
      <div className="App">
        {this.state.loading ? (
          <Loading />
        ) : (
          this.state.users.map(user => (
            <div>
              <h3>{user.name.first + '  ' + user.name.last}</h3>
              <p>EMAIL: {user.email}</p>
              <p>MOBILE: {user.cell}</p>
              <hr />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default App;
