import Screen from '../screen/screen';
import { createElement } from '../helpers/elements';

class Game {
  constructor() {
    this._gameParentDiv = createElement('div', 'js-game');
    this._mode = 'title';
    this._screen;
    this.init();
  }

  get gameParentDiv() {
    return this._gameParentDiv;
  }

  get mode() {
    return this._mode;
  }

  set mode(newMode) {
    this._mode = newMode;
  }

  get screen() {
    return this._screen;
  }

  setNewScreen() {
    // TODO error handling
    this._screen = new Screen(this.gameParentDiv, this.mode);
  }

  init() {
    document.querySelector('body').prepend(this.gameParentDiv);
    this.screen = new Screen(this.gameParentDiv);
    this.screen.title('Adventure Game', 'Let the Adventure Begin', this.start);
  }

  start() {
    console.log('start game')
  }
}

export default Game;