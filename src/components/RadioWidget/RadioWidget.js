import React from 'react';
import styles from './RadioWidget.module.css';
import Navbar from './Navbar/Navbar';
import Tabbar from './Tabbar/Tabbar';
import RadioStations from './RadioStations/RadioStations';

export default function RadioWidget() {
  return (
    <div className={styles.RadioWidget}>
      <Navbar />
      <RadioStations />
      <Tabbar />
    </div>
  );
}
