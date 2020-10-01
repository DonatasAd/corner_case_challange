import React from 'react';
import MinusButton from '../../UI/Buttons/MinusButton/MinusButton';
import PlusButton from '../../UI/Buttons/PlusButton/PlusButton';
import radioLogo from '../../../assets/radio-logo.png';
import styles from './RadioLogo.module.css';

export default function RadioLogo() {
  return (
    <div className={styles.Root}>
      <MinusButton />
      <img className={styles.Logo} src={radioLogo} alt='' />
      <PlusButton />
    </div>
  );
}
