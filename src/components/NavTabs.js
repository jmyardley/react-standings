import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/east"
          className={location.pathname === "/east" ? "nav-link active" : "nav-link"}
        >
          East
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/west"
          className={location.pathname === "/west" ? "nav-link active" : "nav-link"}
        >
          West
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
