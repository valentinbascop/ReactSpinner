import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import { observer } from 'mobx-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './PictureInfo.scss';

function PictureInfo() {
  const name = 'Spinner name'; // TODO: replace with spinner info
  const [x, y] = [3, 4]; // TODO: replace with spinner info
  const rotationAngle = 3.13; // TODO: replace with spinner info;
  const speedLevel = 3; // TODO: replace with spinner info

  return (
    <div className={classNames('ms-2', 'me-auto', style.info)}>
      <div className="fw-bold">{name}</div>
      <Row className={style.PictureInfo}>
        <Col xs="auto">
          x:
          &nbsp;
          {x}
          <br />
          y:
          &nbsp;
          {y}
          &nbsp;
        </Col>
        <Col xs="auto">
          angle:
          &nbsp;
          {rotationAngle}
          rad
          <br />
          speed:
          &nbsp;
          {speedLevel}
        </Col>
      </Row>
    </div>
  );
}

export default observer(PictureInfo);
