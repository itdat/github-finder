import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className="fab fa-github"></i> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
