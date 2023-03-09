import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { observer } from 'mobx-react';
import ListGroup from 'react-bootstrap/ListGroup';
import PictureInfo from './PictureInfo';
import style from './PictureInfoPanel.scss';

function PictureInfoPanel() {
  return (
    <ListGroup className={style.PictureInfoPanel}>
      <ListGroup.Item>
        {/* TODO: replace this by real picture info from spinners */}
        <PictureInfo />
        <PictureInfo />
      </ListGroup.Item>
    </ListGroup>
  );
}

export default observer(PictureInfoPanel);
