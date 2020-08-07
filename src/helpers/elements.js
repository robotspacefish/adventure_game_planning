function createElement(type, id = '', classes = [], textContent = '') {
  if (!type) throw new Error('Element type required.');
  if (id && typeof id !== 'string') throw new Error('id must be type string');
  if (classes.length !== 0 && !Array.isArray(classes)) throw new Error('classes must be an array.');
  if (textContent && typeof textContent !== 'string') throw new Error('id must be type string');

  const element = document.createElement(type);

  if (id) element.id = id;

  if (classes) {
    classes.forEach(className => element.classList.add(className));
  }

  if (textContent) element.textContent = textContent;

  return element;
}

export { createElement };