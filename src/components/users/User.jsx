import React, { useEffect, useContext, Fragment } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({ match, repos, getUserRepos }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUserInfo } = githubContext;

  useEffect(() => {
    getUserInfo(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    hirable,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to search
        </Link>
        Hirable:{" "}
        {hirable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt=""
              className="round-img"
              style={{ width: "200px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              {login && (
                <li>
                  <strong>Username: </strong>
                  {login}
                </li>
              )}
              {company && (
                <li>
                  <strong>Company: </strong>
                  {company}
                </li>
              )}
              {blog && (
                <li>
                  <strong>Blog: </strong>
                  {blog}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-dark">Public Repos: {public_repos}</div>
          <div className="badge badge-light">Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
};

export default User;
