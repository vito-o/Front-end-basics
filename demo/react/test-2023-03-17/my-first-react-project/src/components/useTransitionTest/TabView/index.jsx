import { useState, useMemo, useCallback, useTransition } from 'react'

import Home from './components/Home'
import News from './components/News'
import About from './components/About'


export default function TabView() {
  // pending 当前是否有transition任务在执行
  // starTransition(fn) 表示开启一个transition任务
  const [pending, starTransition] = useTransition();

  const [presetActiveTab, setPresetActiveTab] = useState('home')

  const tabs = useMemo(() => {
    return [
      {key: 'home', label: '首页', component: <Home/>},
      {key: 'news', label: '新闻', component: <News/>},
      {key: 'about', label: '关于', component: <About/>},
    ]
  }, [])  //没有依赖tabs永远不会变了

  const tabHandleClick = useCallback((tab) => {
    // 变为一个transition工作，transition工作是低优先级的，他不会阻塞用户的交互 也不会让页面失去响应
    starTransition(() => setPresetActiveTab(tab.key))
    
  }, [])

  const presetComponent = useMemo(() => {
    return tabs.find(o => o.key == presetActiveTab).component
  }, [presetActiveTab])

  return (
    <div>
      {/* tab head */}
      { tabs.map(tab => {
          return (
            <button onClick={() => tabHandleClick(tab)} key={tab.key}>{tab.label}</button>
          )
        })
      }

      {/* tab body */}
      <div>{pending ? '正在加载中。。。' : presetComponent}</div>
    </div>
  )
}