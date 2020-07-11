import React, { useState } from 'react';
//proptypes
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { login } from '../actions/login';

const Login = ({ login, setAlert }) => {
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');
  // onSubmit handler
  const submitHandler = (e) => {
    e.preventDefault();
    // If username or password is blank throws alert
    if (!userName || !password) {
      setAlert('Please enter login details', 'danger');
    } else {
      login(userName, password);
      setName('');
      setPassword('');
    }
  };
  return (
    <div className='container' style={{ marginTop: '30px' }}>
      <h1>Login to STAR WAR</h1>
      <form onSubmit={submitHandler}>
        <div class='form-group'>
          <label for='exampleInputEmail1'>User Name</label>
          <input
            class='form-control'
            type='text'
            value={userName}
            placeholder='Enter username'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class='form-group'>
          <label for='exampleInputPassword1'>Password</label>
          <input
            type='password'
            class='form-control'
            value={password}
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type='submit' class='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default connect(null, { login, setAlert })(Login);
