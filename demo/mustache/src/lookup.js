export default function lookup(obj, keyName) {
  if(keyName.indexOf('.') >= 0 && keyName != '.') {
    let keys = keyName.split('.')

    let temp = obj;
    for(let i = 0; i < keys.length; i++) {
      if(temp) {
        temp = temp[keys[i]];
      }
    }
    return temp;
  } else {
    return obj[keyName]
  }
}