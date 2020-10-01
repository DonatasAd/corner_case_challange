import React from 'react';
import BackArrow from '../../../../assets/minus-button.png';
import styles from './MinusButton.module.css';

export default function MinusButton(props) {
  return (
    <button {...props} className={styles.Button}>
      <img src={BackArrow} className={styles.Logo} alt='' />
    </button>
  );
}

MinusButton.defaultProps = {
  onClick: () => console.log('Minus button'),
};
