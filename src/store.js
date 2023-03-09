import Aether from './assets/Aether.png';
import Kazuha from './assets/Kazuha.png';
import Lumine from './assets/Lumine.png';
import Shenhe from './assets/Shenhe.png';
import SpinnerManager from './model/SpinnerManager';

const STORE = {
  spinnerManager: new SpinnerManager(),
};

STORE.spinnerManager.addSpinner({
  name: 'Aether', picture: Aether, x: 100, y: 200,
}).addSpinner({
  name: 'Lumine', picture: Lumine, x: 100, y: 200,
}).addSpinner({
  name: 'Kazuha', picture: Kazuha, x: 100, y: 200,
}).addSpinner({
  name: 'Shenhe', picture: Shenhe, x: 100, y: 200,
});

export default STORE;