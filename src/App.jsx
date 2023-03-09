import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container, Row, Col } from 'react-bootstrap';
import RootStore from './RootStore';
import STORE from './store';
import './bootstrap-config.scss';
import PictureInfoPanel from './components/PictureInfoPanel';
import PictureSpace from './components/PictureSpace';

function App() {
  return (
    <RootStore.Provider value={STORE}>
      <main>
        <Container fluid>
          <Row className={classNames('justify-content-sm-center')}>
            <Col xs={12} sm={8} md={6} lg={6} xl={1}>
              <h1>WebApp</h1>
            </Col>
          </Row>
          <Row>
            <Col xl={10} lg={10} md={9} sm={12}>
              <PictureSpace />
            </Col>
            <Col>
              <PictureInfoPanel />
            </Col>
          </Row>
        </Container>
      </main>
    </RootStore.Provider>

  );
}

export default App;
