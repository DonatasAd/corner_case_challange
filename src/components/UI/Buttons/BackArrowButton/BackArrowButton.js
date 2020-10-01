import React from 'react';
import BackArrow from '../../../../assets/back-arrow.png';
import styles from './BackArrowButton.module.css';

export default function BackArrowButton(props) {
  return (
    <button {...props} className={styles.Button}>
      <img src={BackArrow} className={styles.Logo} alt='' />
    </button>
  );
}

BackArrowButton.defaultProps = {
  onClick: () => console.log('Back button'),
};
