export default function NewsItem({info}) {

  for(let i = 0; i < 100; i++) {
    console.log(i, 'newsItem')
  }

  return (
    <div>newsItem：{info}</div>
  )
}