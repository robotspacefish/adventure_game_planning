import Screen from '../screen/screen';
import { createElement } from '../helpers/elements';

class Game {
  constructor() {
    this._gameParentDiv = createElement('div', 'js-game');
    this.mode = 'title';
    this.screen;
    this.init();

  }

  get gameParentDiv() {
    return this._gameParentDiv;
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