import * as actionTypes from './actionTypes';

const radioStations = [
  { name: 'Putin FM', frequency: 66.6 },
  { name: 'Dribble FM', frequency: 101.2 },
  { name: 'Doge FM', frequency: 99.4 },
  { name: 'Ballads FM', frequency: 87.1 },
  { name: 'Maximum FM', frequency: 142.2 },
];

export const fetchRadiosStations = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.FETCH_RADIO_STATIONS,
      radioStations: radioStations,
    });
  };
};

export const setCurrentRadio = (radio) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_CURRENT_RADIO,
      currentRadio: radio,
    });
  };
};
