/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import RootStore from '../RootStore';
import style from './SpinningPicture.scss';
import { PropTypes as PTMobx } from 'mobx-react';
import SpinnerManager from '../model/SpinnerManager';
import Spinner from '../model/Spinner';

function SpinningPicture({ spinner, onSelected }) {
  const [x, y] = spinner.position;

  const pictStyle = {
    left: `${x}px`,
    top: `${y}px`,
    rotate: `${spinner.rotationAngle.toFixed(3)}rad`,
  };
  const selectPicture = (evt) => {
    evt.preventDefault();
    onSelected(spinner);
  };

  

  return (
    <div>
      <img
        src={spinner.picture}
        alt={spinner.name}
        className={style.SpinningPicture}
        style={pictStyle}
        onMouseDown={selectPicture}
      />
    </div>

  );
}

SpinningPicture.propTypes = {
  spinner: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  onSelected: PropTypes.func.isRequired,
  spinner: PTMobx.observableObject.isRequired,
};

export default observer(SpinningPicture);
