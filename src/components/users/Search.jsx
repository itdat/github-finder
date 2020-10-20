import React, { useState } from "react";

const Search = ({ showAlert, searchUsers, clearUsers, showClear }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      showAlert("Please enter something...", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input type="text" name="text" placeholder="Search users..." value={text} onChange={onChange} />
        <input type="submit" value="Search" className="btn btn-block btn-dark" />
      </form>
      {showClear && (
        <button className="btn btn-block btn-light" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
