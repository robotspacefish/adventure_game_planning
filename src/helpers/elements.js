/**
 * Creates and returns HTML element with the provided attributes
 * @param {string} type type of element
 * @param {string} id  id of element
 * @param {string} classes 1 or more class names, separated by a space
 * @param {string} textContent text to display inside the element
 * @return {string} element
 */
function createElement(type, id = '', classes = '', textContent = '') {
  // Error checks
  if (!type) throw new Error('Element type required.');

  if (id && typeof id !== 'string') throw new Error('id must be type string');

  if (classes && typeof classes !== 'string') throw new Error('classes must be type string. Each class name should be separated by a space within the same string.');

  if (textContent && typeof textContent !== 'string') throw new Error('text must be type string');

  // create element & set attributes
  const element = document.createElement(type);

  if (id) element.id = id;

  if (classes) element.setAttribute('class', classes);

  if (textContent) element.textContent = textContent;

  return element;
}

export { createElement };