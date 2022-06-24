const { file, parse } = require('./globals.js');

function component() {
  const element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  // 假设我们处于 `window` 上下文
  this.alert('Hmmm, this probably isn\'t a great idea...')
  console.log(file,  parse)
  return element;
}

document.body.appendChild(component())