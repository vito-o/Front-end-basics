/// <reference types="webpack/module" />
import _ from 'lodash'

let a:number = 123

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  console.log(123, a)
 
  console.log(import.meta.webpack); 

  return element;
}

document.body.appendChild(component())