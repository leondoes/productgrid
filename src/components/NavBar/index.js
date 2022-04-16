import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/ProductListPage">Product List Page</Link>
  </div>
);

export default NavBar;
