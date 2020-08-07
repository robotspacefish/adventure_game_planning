import './screen.css';
import { createElement } from '../helpers/elements';

class Screen {
  constructor(parent) {
    this._gameTextOutput = '';
    this._screenContainer = createElement('div', 'js-screen-container');
    parent.appendChild(this._screenContainer)
  }

  appendToContainer(child) {
    this._screenContainer.appendChild(child);
  }

  get screenContainer() {
    return this._screenContainer;
  }
export default Screen;