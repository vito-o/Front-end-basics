declare let count: number
declare let songName: string

interface Point{
  x: number
  y: number
}

declare let position : Point

declare function add(x: number, y:number): number;
declare function changeDirection(direction: 'up' | 'down' | 'left' | 'right'): void;

type FomartPoint = (point: Point) => void;
declare const formatPoint: (point: Point) => void

//注意：类型提供好以后，需要使用模块化方案中提供的模块化语法，来导出声明好的类型。然后，
//才能在其他的.ts文件中使用

export { count, songName, position, add, changeDirection, formatPoint, Point }