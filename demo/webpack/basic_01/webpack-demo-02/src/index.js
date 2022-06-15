import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml'
import Notes from './data.csv'
import json from '../package.json'

import toml from './data.toml'
import yaml from './data.yaml'
import json5 from './data.json5'

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log(Data)
  console.log(Notes)
  console.log(json)

  console.log(toml)
  console.log(yaml)
  console.log(json5)

  return element;
}

document.body.appendChild(component())