import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" className="btn btn-block btn-dark" />
        </form>
      </div>
    );
  }
}

export default Search;
