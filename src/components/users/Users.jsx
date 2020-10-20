import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: 1,
          login: "mojombo",
          avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
          html_url: "https://github.com/mojombo",
        },
        {
          id: 2,
          login: "defunkt",
          avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
          html_url: "https://github.com/defunkt",
        },
        {
          id: 3,
          login: "pjhyett",
          avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
          html_url: "https://github.com/pjhyett",
        },
      ],
    };
  }

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user, i) => (
          <UserItem key={i} avatar_url={user.avatar_url} login={user.login} html_url={user.html_url} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
