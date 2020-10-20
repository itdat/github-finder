import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import axios from "axios";
import Alert from "./components/layout/Alert";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false,
      alert: null,
    };
  }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      users: res.data.items,
      loading: false,
    });
  };

  clearUsers = () => {
    this.setState({
      users: [],
    });
  };

  showAlert = (msg, type) => {
    this.setState({
      alert: { msg, type },
    });
    setTimeout(() => {
      this.setState({
        alert: null,
      });
    }, 3000);
  };

  render() {
    const { users, loading, alert } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      showAlert={this.showAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
