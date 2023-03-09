import { makeAutoObservable } from 'mobx';

const MAX_SPEED_LEVEL = 5;

const SPEED_LEVEL_ANGLE_MS_MAP = [
  0,
  Math.PI / 2000,
  Math.PI / 1000,
  Math.PI / 500,
  Math.PI / 125,
  (4 + Math.PI) / 125,
];

class Spinner {
  _name; // name, unique

  _picture; // Picture content

  _x; // Position width, in pixel

  _y; // Position height, in pixel

  _rotSpeed = 0; // Rotation speed, int within [0 ; MAX_SPEED_LEVEL] interval

  _rotDirection = 1; // Rotation direction, rotation direction 1 or -1

  _rotAngle = 0; // Rotation Angle, in radians, float within [0 ; 2*PI[

  constructor(name, picture, x = 100, y = 100) {
    makeAutoObservable(this, {
      _name: false,
      name: false,
      _picture: false,
      picture: false,
    });
    this._name = name;
    this._picture = picture;
    this._x = x;
    this._y = y;
  }

  get name() {
    return this._name;
  }

  get picture() {
    return this._picture;
  }

  get position() {
    return [this._x, this._y];
  }

  set position([x, y]) {
    [this._x, this._y] = [x, y];
  }

  addPositionDelta([dX, dY]) {
    this._x += dX;
    this._y += dY;
  }

  get rotationSpeed() {
    return this._rotSpeed;
  }

  get rotationDirection() {
    return this._rotDirection;
  }

  get rotationAngle() {
    return this._rotAngle;
  }

  changeRotation(direction) {
    if (direction !== 1 && direction !== -1) {
      console.warn('unmanageable direction', direction);
      return;
    }
    if (this._rotSpeed === 0) {
      this._rotSpeed = 1;
      this._rotDirection = direction;
    } else if (this._rotDirection !== direction) {
      this._rotSpeed = 0;
    } else {
      this._rotSpeed = Math.min(MAX_SPEED_LEVEL, this._rotSpeed + 1);
    }
    console.log(`changement chez ${this._name}
    speed= ${this._rotSpeed}
    direct= ${this._rotDirection}`);
  }

  rotate(deltaTimeMs) {
    // TODO: find what argument we needs then implement the algorithm
    if (this._rotSpeed === 0 || !deltaTimeMs) {
      return;
    }

    this._rotAngle += this._rotDirection * SPEED_LEVEL_ANGLE_MS_MAP[this._rotSpeed] * deltaTimeMs;
    this._rotAngle = this._rotAngle % (Math.PI * 2);
  }
}

export default Spinner;
