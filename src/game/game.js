import Screen from '../screen/screen';
import { createElement } from '../helpers/elements';
import './game.css';

class Game {
  constructor() {
    this._gameParentDiv = createElement('div', 'js-game', 'game-container container-general');
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
    this._mode = newMode.toLowerCase();
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
    this.setNewScreen();
    this.screen.init('Adventure Game', 'Let the Adventure Begin', this.start.bind(this));
  }

  clearGameParentDiv() {
    const parent = this.gameParentDiv;
    while (parent.hasChildNodes()) {
      parent.removeChild(parent.childNodes[0])
    }
  }

  start() {
    this.clearGameParentDiv();
    this.mode = 'play';

    this.setNewScreen();
    this.screen.init();
  }
}

export default Game;