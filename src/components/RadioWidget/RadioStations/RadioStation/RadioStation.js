import React from 'react';
import styles from './RadioStation.module.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as radioStationsActions from '../../../../store/actions/radioStations';
import RadioLogo from '../../RadioLogo/RadioLogo';
export function RadioStation({ radio, currentRadio, appendLine, setCurrentRadio }) {
  const radioChangeHandler = () => setCurrentRadio(radio.name);

  return (
    <li className={styles.ListItem}>
      {radio && radio.name === currentRadio && <RadioLogo />}
      {radio && (
        <button className={styles.Button} aria-label={`Change station to ${radio.name}`} onClick={radioChangeHandler}>
          <h2 className={styles.RadioTitle}>
            {radio.name}
            <span className={styles.Frequency}>{radio.frequency}</span>
          </h2>
        </button>
      )}
      {appendLine && <hr className={styles.HorizontalLine} />}
    </li>
  );
}

RadioStation.propTypes = {
  radio: PropTypes.shape({
    name: PropTypes.string.isRequired,
    frequency: PropTypes.number.isRequired,
  }),
  appendLine: PropTypes.bool,
  setCurrentRadio: PropTypes.func,
};

const mapDispatchToProps = {
  setCurrentRadio: radioStationsActions.setCurrentRadio,
};

const mapStateToProps = (state) => ({
  currentRadio: state.radioStation.currentRadio,
});

export default connect(mapStateToProps, mapDispatchToProps)(RadioStation);
