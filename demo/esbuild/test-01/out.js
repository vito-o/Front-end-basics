(() => {
  // b.js
  function add(a2, b2) {
    return a2 + b2;
  }

  // a.js
  var a = 1;
  var b = 2;
  var a_default = add(a, b);
})();
