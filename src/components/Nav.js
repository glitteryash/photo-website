import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="try">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="try">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
