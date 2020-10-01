import React from 'react';
import style from './Navbar.module.css';
import BackArrowButton from '../../UI/Buttons/BackArrowButton/BackArrowButton';
import PowerButton from '../../UI/Buttons/PowerButton/PowerButton';

export default function Navbar() {
  
  return (
    <div className={style.Navbar}>
      <BackArrowButton />
      <h1 className={style.Title}>STATIONS</h1>
      <PowerButton />
    </div>
  );
}
