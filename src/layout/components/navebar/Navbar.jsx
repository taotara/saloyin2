import "./navbar.css";
import Logo from "../../../assets/brand.png";
import { NavLink, Link } from "react-router-dom";
import { Component } from "react";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // const navigate = useNavigate();
  render() {
    return (
      <nav>
        <div className="brand">
          <Link to="/">
            <img src={Logo} alt="Saloyin Logo" />
          </Link>
        </div>
        <div className="navbar">
          <ul
            id="nav-menu"
            className={this.state.clicked ? "#nav-menu active" : "#nav-menu"}
          >
            <li className="nav-menu-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-menu-item with-dropdown">
              <NavLink to="/services">Services</NavLink>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/services/business registration">
                    Business Registration
                  </Link>
                </li>
                <li>
                  <Link to="/services/general supplies">General Supplies</Link>
                </li>
                <li>
                  <Link to="/services/general printing services">
                    General Printing Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/import and export services">
                    Import & Export Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/computer software and hardware training">
                    Computer Software & Hardware Training
                  </Link>
                </li>
                <li>
                  <Link to="/services/real estate services">
                    Real Estate Services
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-menu-item">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="nav-menu-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="nav-menu-item">
              <div className="btn btn-nav">
                <Link to="/contact">Lets Talk</Link>
              </div>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
