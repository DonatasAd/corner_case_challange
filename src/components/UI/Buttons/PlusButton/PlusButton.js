import React from 'react';
import BackArrow from '../../../../assets/plus-button.png';
import styles from './PlusButton.module.css';

export default function PlusButton(props) {
  return (
    <button {...props} className={styles.Button}>
      <img src={BackArrow} className={styles.Logo} alt='' />
    </button>
  );
}

PlusButton.defaultProps = {
  onClick: () => console.log('Plus button'),
};
