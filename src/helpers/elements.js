function createElement(type, id = '', classes = []) {
  if (!type) throw new Error('Element type required.');
  if (id && typeof id !== 'string') throw new Error('id must be type string');
  if (classes.length !== 0 && !Array.isArray(classes)) throw new Error('classes must be an array.');

  const element = document.createElement(type);
  if (id) element.id = id;
  if (classes) {
    classes.forEach(className => element.classList.add(className));
  }
}

export { createElement };