(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function add(num1, num2) {
    return num1 + num2
  }


  console.log(
    add(1, 2)
  );

}));
