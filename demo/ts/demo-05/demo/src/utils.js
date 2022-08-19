let count = 10
let songName = '阿斯利康积分'
let position = {
  x: 0,
  y: 0
}

function add(x, y) {
  return x + y;
}

function changeDirection(direction) {
  console.log(direction)
}

const fomartPoint = point => {
  console.log('当前坐标：', point)
}

export { count, songName, position, add, changeDirection, fomartPoint }