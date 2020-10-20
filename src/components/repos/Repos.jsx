import React from "react";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "1rem" }}>
      {" "}
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}{" "}
    </div>
  );
};

export default Repos;
