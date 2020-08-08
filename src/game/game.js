import Screen from '../screen/screen';
import { createElement } from '../helpers/elements';

class Game {
  constructor(parentDivId, startFn) {
    this._gameParentDiv = createElement('div', parentDivId);
    this.screen;
    this.init(startFn);

  }

  get gameParentDiv() {
    return this._gameParentDiv;
  }

  init(startFn) {
    document.querySelector('body').prepend(this.gameParentDiv)
    this.screen = new Screen(this.gameParentDiv);
    this.screen.title('Adventure Game', 'Let the Adventure Begin', this[startFn].bind(this));
  }

  test() {
    console.log('test', this)
  }
  test2() {
    console.log('test2', this)
  }
}

export default Game;