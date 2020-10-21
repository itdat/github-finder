import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import GithubContext from "../../context/github/githubContext";

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "1rem",
      }}
    >
      {" "}
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}{" "}
    </div>
  );
};

export default Repos;
