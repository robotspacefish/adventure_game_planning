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

  title(titleText, startBtnText, callback) {
    const startBtn = createElement('button', 'js-start-button', 'start-btn btn', startBtnText);

    this.appendToContainer(
      createElement('h1', 'title', '', titleText)
    );

    this.appendToContainer(startBtn);

    startBtn.addEventListener('click', callback);
  }


}

export default Screen;