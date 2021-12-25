import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'other-1', // app name registered
    entry: '//10.18.28.35:8881',
    container: '#other-1',
    activeRule: '/other-1',
  },
  {
    name: 'other-2', // app name registered
    entry: '//10.18.28.35:3000',
    container: '#other-1',
    activeRule: '/other-2',
  },
  {
    name: 'other-3', // app name registered
    entry: '//10.18.28.35:8883',
    container: '#other-1',
    activeRule: '/other-3',
  },
]);

// 启动 qiankun
start();