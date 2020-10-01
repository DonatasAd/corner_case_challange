import React, { useEffect } from 'react';
import styles from './RadioStations.module.css';
import RadioStation from './RadioStation/RadioStation';
import { connect } from 'react-redux';
import * as radioStationsActions from '../../../store/actions/radioStations';
import PropTypes from 'prop-types';

export function RadioStations({ fetchRadiosStations, radioStations }) {
  useEffect(() => {
    fetchRadiosStations();
  }, [fetchRadiosStations]);
  return (
    <div className={styles.Root}>
      <ul className={styles.List}>
        {radioStations && radioStations.map((el, index) => <RadioStation radio={el} key={el.frequency} appendLine={index !== radioStations.length - 1} />)}
      </ul>
    </div>
  );
}

RadioStations.propTypes = {
  radioStations: PropTypes.array,
  fetchRadiosStations: PropTypes.func,
};

const mapDispatchToProps = {
  fetchRadiosStations: radioStationsActions.fetchRadiosStations,
};

const mapStateToProps = (state) => ({
  radioStations: state.radioStation.radioStations,
});

export default connect(mapStateToProps, mapDispatchToProps)(RadioStations);
