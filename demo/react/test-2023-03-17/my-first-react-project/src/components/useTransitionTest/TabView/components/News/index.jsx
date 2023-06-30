import { useState } from 'react'
import NewsItem from './NewsItem'

const arr = []

for(let i = 0; i < 500; i++) {
  arr.push(i)
}


export default function News() {

  const [news] = useState(arr)

  return (
    <div>
      {
        news.map(_new => <NewsItem info={_new} key={_new}/>)
      }
    </div>
  )
}