import { GET_PLANETS, GET_SINGLE_PLANET } from '../actions/types';

const initialState = {
  planets: [],
  planet: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANETS:
      return {
        ...state,
        planets: action.payload,
      };
    case GET_SINGLE_PLANET: {
      return {
        ...state,
        planet: action.payload,
      };
    }
    default:
      return state;
  }
};
