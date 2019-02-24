import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const numberOfSavedGems = Object.keys(props.savedGems).length;
    return (
      <nav className="Navbar">
        <ul className="nav justify-content-between">
          <li className="Navbar-left nav-item">
            <Link to="/">
              <FontAwesome name="diamond" />
            </Link>
          </li>
          <li className="Navbar-right nav-item d-flex align-items-center">
            <Link className="d-flex align-items-center" to="/saved">
              <span className="Navbar-star-container position-relative d-flex justify-content-center align-items-center">
                <FontAwesome className="position-absolute mr-2" name="star" />
                <span className="position-absolute">{numberOfSavedGems}</span>
              </span>
              <span>Saved Gems</span>
            </Link>
          </li>
        </ul>
      </nav>
    )
}

function mapStateToProps(state) {
  return { savedGems: state.gems.savedGems };
}

export default connect(mapStateToProps, null)(Navbar);
