/**
 * 虚拟列表 + 分页
 * 
 * 
 */

import './App.css';

import { useRef, useState, useEffect, useMemo } from 'react'

//页面容器高度 
const SCROLL_VIEW_HEIGHT = 500;
//列表项高度
const ITEM_HEIGHT = 50;
//预加载数量
const PRE_LOAD_COUNT = SCROLL_VIEW_HEIGHT / ITEM_HEIGHT;


function App() {
  const [sourceData, setSourceData] = useState([]);

  const [showRange, setShowPageRange] = useState({
    start: 0,
    end: 10
  });

  const containerRef = useRef(null)
  /**
   * 创建列表显示数据
   */
  const createListData = () => {
    const initnalList = Array.from(Array(4000).keys());
    setSourceData(initnalList);
  };

  useEffect(() => {
    createListData();
  }, []);

  /**
   * onScroll事件回调
   * @param event { UIEvent<HTMLDivElement> } scrollview滚动参数
   */
  const onContainerScroll = (event) => {
    event.preventDefault();
    if (reachScrollBottom()) {
      // 模拟数据添加，实际上是 await 异步请求做为数据的添加
      let endIndex = showRange.end;
      let pushData = [];
      for (let index = 0; index < 20; index++) {
        pushData.push(endIndex++);
      }
      setSourceData((arr) => {
        return [...arr, ...pushData];
      });
    }
    calculateRange();
  };

  /**
   * 计算元素范围
   */
  const calculateRange = () => {
    const element = containerRef.current;
    if (element) {
      const offset = Math.floor(element.scrollTop / ITEM_HEIGHT) + 1;
      console.log(offset, "offset");
      const viewItemSize = Math.ceil(element.clientHeight / ITEM_HEIGHT);
      const startSize = offset - PRE_LOAD_COUNT;
      const endSize = viewItemSize + offset + PRE_LOAD_COUNT;
      setShowPageRange({
        start: startSize < 0 ? 0 : startSize,
        end: endSize > sourceData.length ? sourceData.length : endSize,
      });
    }
  };

  /**
   * 计算当前是否已经到底底部
   * @returns 是否到达底部
   */
  const reachScrollBottom = () => {
    //滚动条距离顶部
    const contentScrollTop = containerRef.current?.scrollTop || 0; 
    //可视区域
    const clientHeight = containerRef.current?.clientHeight || 0; 
    //滚动条内容的总高度
    const scrollHeight = containerRef.current?.scrollHeight || 0;
    if (contentScrollTop + clientHeight >= scrollHeight) {
      return true;
    }
    return false;
  };

  /**
   * 当前scrollView展示列表
   */
   const currentViewList = useMemo(() => {
    return sourceData
      .slice(showRange.start, showRange.end)
      .map((el, index) => ({
        data: el,
        index
      }));
  }, [showRange, sourceData]);

  /**
   * scrollView整体高度
   */
  const scrollViewHeight = useMemo(() => {
    return sourceData.length * ITEM_HEIGHT;
  }, [sourceData]);

  /**
   * scrollView 偏移量
   */
   const scrollViewOffset = useMemo(() => {
    console.log(showRange.start, "showRange.start");
    return showRange.start * ITEM_HEIGHT;
  }, [showRange.start]);

  return (
    <div
      ref={containerRef}
      style={{
        height: SCROLL_VIEW_HEIGHT,
        overflow: "auto",
      }}
      onScroll={onContainerScroll}
    >
      <div
        style={{
          width: "100%",
          height: scrollViewHeight - scrollViewOffset,
          marginTop: scrollViewOffset,
        }}
      >
        {currentViewList.map((e) => (
          <div
            style={{
              height: ITEM_HEIGHT
            }}
            className="showElement"
            key={e.data}
          >
            Current Position: {e.data}
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
