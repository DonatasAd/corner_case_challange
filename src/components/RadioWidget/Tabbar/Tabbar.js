import React, { Fragment } from 'react';
import style from './Tabbar.module.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Tabbar({ currentRadio }) {
  return (
    <div className={style.Tabbar}>
      {currentRadio && (
        <Fragment>
          <h5 className={style.SubTitle}>CURRENTLY PLAYING</h5>
          <h2 className={style.Title}>{currentRadio}</h2>
        </Fragment>
      )}
    </div>
  );
}
Tabbar.propTypes = {
  currentRadio: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentRadio: state.radioStation.currentRadio,
});

export default connect(mapStateToProps, null)(Tabbar);
