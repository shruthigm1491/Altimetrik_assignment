import { GET_PLANETS, GET_SINGLE_PLANET } from './types';
import Axios from 'axios';
import { setAlert } from '../actions/alert';

export const getPlanets = () => async (dispatch) => {
  try {
    const planets = await Axios.get('https://swapi.dev/api/planets');
    dispatch({
      type: GET_PLANETS,
      payload: planets.data.results,
    });
  } catch (error) {
    dispatch(setAlert('Something went wrong', 'danger'));
  }
};

export const getSearchedPlanet = (name) => async (dispatch) => {
  try {
    const planet = await Axios.get(
      `https://swapi.dev/api/planets?search=${name}`
    );

    dispatch({
      type: GET_SINGLE_PLANET,
      payload: planet.data.results,
    });
  } catch (error) {
    dispatch(setAlert('Something went wrong', 'danger'));
  }
};
