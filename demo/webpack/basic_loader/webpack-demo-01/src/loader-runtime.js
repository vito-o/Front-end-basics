module.exports = function runtime(params) {
  const x = params.y * 2;

  return params.source + `\nconsole.log(${x})`;
};