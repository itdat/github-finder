import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div className="card my-0">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>{" "}
        <span className="badge badge-light">{repo.private ? "private" : "public"}</span>
      </h3>
      <p>{repo.description !== null ? repo.description : <em>There is no discription</em>}</p>
    </div>
  );
};

export default RepoItem;
