import { makeAutoObservable } from 'mobx';
import Spinner from './Spinner';

const TARGETED_FPS = 0;

class SpinnerManager {
  _spinners = [];

  _selectedSpinner = null;

  _selectionTime = null;

  _engineInterval;

  _lastRotationTime = 0;

  constructor() {
    makeAutoObservable(this, {
      _engineInterval: false,
      startSpinningEngine: false,
      stopSpinningEngine: false,
      _lastRotationTime: false,
    });
  }

  get spinners() {
    return this._spinners;
  }

  addSpinner({ name, picture }) {
    this._spinners.push(new Spinner(name, picture, 100, 200));
    return this;
  }

  get selectedSpinner() {
    return this._selectedSpinner;
  }

  set selectedSpinner(spinner) {
    this._selectedSpinner = spinner;
  }

  get selectionTime() {
    return this._selectionTime;
  }

  set selectionTime(time) {
    this._selectionTime = time;
  }

  get hasSelectedSpinner() {
    return !!this._selectedSpinner;
  }

startSpinningEngine(){
    if (this._engineInterval) {
      return;
    }
    const intervalTime = Math.round(1000 / TARGETED_FPS);
    this._lastRotationTime = new Date();
    this._engineInterval = setInterval(() => {
      const now = new Date();
      const deltaTimeMs = now - this._lastRotationTime;
      if(deltaTimeMs) {
        this._spinners.forEach((spinner) => 
          spinner.rotate(deltaTimeMs));
      }
      this._lastRotationTime = now;
  }, intervalTime);
}

stopSpinningEngine() {
    if(!this._engineInterval){
      return;
    }
    clearInterval(this._engineInterval);
    this._engineInterval = null;
  }
}
export default SpinnerManager;

// Factory = méthode qui va se charger de la construction des objets
