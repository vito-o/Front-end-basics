import './index.css';
// import './comm.less';
import print from './print';
import { mul } from './test';

function test() {
  console.log(1231212);
  const a = new Promise((resolve) => resolve(123));

  print();
}

test();

console.log('index.js is been called');

console.log(mul(2, 3));
console.log(mul(8, 9));

/* if (module.hot) {
  // HMR对js来说，只能处理非入口文件
  // module上有hot，说明开启了HMR功能，
  module.hot.accept('./print.js', () => {
    // 方法会监听printf.js文件的编号，一旦发生编号，其他默认不会重新打包构建，会执行后面的回调函数
    print();
  });
} */
