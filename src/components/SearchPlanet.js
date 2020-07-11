import React, { useEffect } from 'react';
//proptypes
import PropTypes from 'prop-types';
// Material UI components
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// REDUX
import { connect } from 'react-redux';
import { getSearchedPlanet, getPlanets } from '../actions/planet';
import { setAlert } from '../actions/alert';
//USER defined component
import Planet from './Planet';

const SearchPlanet = ({
  planet: { planet, planets },
  getSearchedPlanet,
  getPlanets,
  setAlert,
}) => {
  useEffect(() => {
    getPlanets();
  }, []);

  const [planetName, setPlanetName] = React.useState('');

  const getSearchedResult = (e) => {
    e.preventDefault();
    if (!planetName) {
      setAlert('Please search for the planet name', 'danger');
    } else {
      getSearchedPlanet(planetName);
    }
  };

  return (
    <div className='container mx-auto' style={{ marginTop: '10px' }}>
      <h1>Search for Planet</h1>
      <Autocomplete
        inputValue={planetName}
        onInputChange={(event, planetName) => {
          setPlanetName(planetName);
        }}
        id='controllable-states-demo'
        options={planets.map((planet) => planet.name)}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label='planet name' variant='outlined' />
        )}
      />

      <button
        type='button'
        class='btn btn-primary'
        onClick={getSearchedResult}
        style={{ marginTop: '10px' }}
      >
        Search
      </button>
      {planet ? <Planet planet={planet} /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  planet: state.planet,
});

SearchPlanet.propTypes = {
  getSearchedPlanet: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  getPlanets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getSearchedPlanet,
  getPlanets,
  setAlert,
})(SearchPlanet);
