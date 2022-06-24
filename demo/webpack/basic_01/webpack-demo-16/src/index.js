import _ from 'lodash'

function component(answer) {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack', answer], ' ');

  return element;
}
console.log('~~')
console.log(import.meta.url)
console.log('~~')
const worker = new Worker(new URL('./deep-thought.js', import.meta.url));
worker.postMessage({
  question:
    'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
});

worker.onmessage = ({ data: { answer } }) => {
  console.log(answer);
  document.body.appendChild(component(answer))
};


