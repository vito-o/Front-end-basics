import _ from 'lodash'
import numRef from './ref.json'

import en from 'schema-utils/dist/util/hints'
import pa from 'schema-utils/dist/util/Range'

console.log(en)
console.log(pa)

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ''
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}