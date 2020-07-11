import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import { isAuthenticated } from './actions/login';
import SearchPlanet from './components/SearchPlanet';
import Login from './components/Login';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

const App = () => {
  useEffect(() => {
    store.dispatch(isAuthenticated());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/search' component={SearchPlanet} />
          <Route exact path='/' component={Landing} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
