import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { trace } from 'mobx';
import { useRef } from 'react';
import { useEffect } from 'react';
import RootStore from '../RootStore';
import SpinningPicture from './SpinningPicture';
import style from './PictureSpace.scss';
import Spinner from '../model/Spinner';

function PictureSpace() {
  const { spinnerManager } = useContext(RootStore);
  const lastPictureSelectedDate = useRef(0);

  useEffect(() => {
    if (spinnerManager) {
      spinnerManager.startSpinningEngine();
      return () => {
        spinnerManager.stopSpinningEngine();
      };
    }
    return null;
  }, [spinnerManager]);

  const selectedSpinner = (spinner) => {
    spinnerManager.selectedSpinner = spinner;
    spinnerManager.selectionTime = new Date();
  };

  const moveSpinner = (evt) => {
    if (spinnerManager.hasSelectedSpinner) {
      spinnerManager.selectedSpinner.addPositionDelta([evt.movementX, evt.movementY]);
    }
  };

  const unselectSpinner = () => {
    spinnerManager.selectedSpinner = null;
  };

  const unselectSpinnerAndMaybeClick = (evt) => {
    if (spinnerManager.hasSelectedSpinner) {
      // selectionner le temps le mouseDown et mouseUp
      const deltaMs = (new Date()) - spinnerManager.selectionTime;
      if (deltaMs < 250) {
        spinnerManager.selectedSpinner.changeRotation(evt.button ? -1 : 1);
      }
    }

    unselectSpinner();
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={style.PictureSpace}
      onMouseMove={moveSpinner}
      onMouseUp={unselectSpinnerAndMaybeClick}
      onMouseLeave={unselectSpinner}
      onContextMenu={(evt) => (evt.preventDefault())}
    >
      {
        spinnerManager.spinners.map((s) => (
          <SpinningPicture
            key={s.name}
            spinner={s}
            onSelected={() => selectedSpinner(s)}
          />
        ))
      }
    </div>
  );
}

export default observer(PictureSpace);
