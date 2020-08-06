import './screen.css';
import { createElement } from '../helpers/elements';

class Screen {
  constructor() {
    this.gameTextOutput = '';
    this.screenContainer = createElement('div', 'js-screen-container');
  }

}

export default Screen;