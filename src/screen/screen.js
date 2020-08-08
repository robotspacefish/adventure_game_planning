import { createElement } from '../helpers/elements';
import './screen.css';

class Screen {
  constructor(parent, type) {
    this._gameTextOutput = '';
    this._type = type;
    this._screenContainer = createElement('div', `${type}-screen`, 'screen-container container-general');
    parent.append(this._screenContainer)
  }

  appendToContainer(child) {
    this._screenContainer.append(child);
  }

  init() {
    switch (this.type) {
      case 'title':
        this.title(arguments);
        break;
      case 'play':
        this.play(arguments);
        break;
      default:
        throw new Error('That screen type does not exist.')
    }
  }

  get screenContainer() {
    return this._screenContainer;
  }

  get type() {
    return this._type;
  }

  title() {
    const [titleText, startBtnText, callback] = arguments[0];
    const startBtn = createElement('button', 'js-start-button', 'start-btn btn', startBtnText);

    this.appendToContainer(
      createElement('h1', 'title', '', titleText)
    );

    this.appendToContainer(startBtn);

    startBtn.addEventListener('click', callback);
  }

  play() {
    this.appendToContainer(createElement('h1', '', '', 'Play Screen')) // testing
  }


}

export default Screen;