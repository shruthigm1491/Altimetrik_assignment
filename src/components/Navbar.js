import React from 'react';
//proptypes
import PropTypes from 'prop-types';
// React router
import { Link } from 'react-router-dom';
// REDUX
import { connect } from 'react-redux';
import { logout } from '../actions/login';

const Navbar = ({ logout, login: { isLogin } }) => {
  return (
    <nav class='navbar navbar-dark bg-dark'>
      <ul class='nav justify-content-center'>
        <li class='nav-item'>
          <Link class='nav-link active' to='/'>
            Home
          </Link>
        </li>
        {isLogin ? (
          <li class='nav-item'>
            <Link class='nav-link active' to='/' onClick={logout}>
              Logout
            </Link>
          </li>
        ) : (
          <li class='nav-item'>
            <Link class='nav-link active' to='/login'>
              Login
            </Link>
          </li>
        )}

        <li class='nav-item'>
          <Link class='nav-link active' to='/search'>
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  login: state.login,
});

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  isLogin: PropTypes.bool,
};
export default connect(mapStateToProps, { logout })(Navbar);
