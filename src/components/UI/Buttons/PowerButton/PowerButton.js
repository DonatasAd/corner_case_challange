import React from 'react';
import Power from '../../../../assets/power-button.png';
import styles from './PowerButton.module.css';

export default function PowerButton(props) {
  return (
    <button {...props} className={styles.Button}>
      <img src={Power} className={styles.Logo} alt='' />
    </button>
  );
}

PowerButton.defaultProps = {
  onClick: () => console.log('Power button'),
};