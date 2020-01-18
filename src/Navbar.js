import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const dogLinks = this.props.dogs.map((d, i) => (
      <li className="nav-item" key={d.name}>
        <NavLink key="i" className="nav-link" exact to={`/dogs/${d.name}`}>
          {d.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/dogs">
          Dogs
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavLink exact to="/dogs" className="nav-link">
              Home
            </NavLink>
            {dogLinks}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
export default Navbar;
