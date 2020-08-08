import Screen from '../screen/screen';
import { createElement } from '../helpers/elements';

class Game {
  constructor(parentDivId, startFn) {
    this.gameParentDiv = createElement('div', parentDivId);
    this.init(startFn);
  }

  init(startFn) {
    document.querySelector('body').prepend(this.gameParentDiv)
    new Screen(this.gameParentDiv).title('Adventure Game', 'Let the Adventure Begin', this[startFn].bind(this));
  }

  test() {
    console.log('test', this)
  }
  test2() {
    console.log('test2', this)
  }
}

export default Game;