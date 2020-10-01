import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  radioStations: [],
  currentRadio: '',
};

const setCurrentRadio = (state, action) => {
  return updateObject(state, { currentRadio: action.currentRadio });
};

const fetchRadioStations = (state, action) => {
  return updateObject(state, { radioStations: action.radioStations });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_RADIO:
      return setCurrentRadio(state, action);
    case actionTypes.FETCH_RADIO_STATIONS:
      return fetchRadioStations(state, action);
    // case actionTypes.AUTH_FAIL: return authFail(state, action);
    // case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
    default:
      return state;
  }
};

export default reducer;
