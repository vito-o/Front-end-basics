import { useContext } from 'react'

import ThemeContext from './themeContext'

export default function UseContextTest() {

  const theme = useContext(ThemeContext);
  console.log(theme, 'theme')

  

  return (
    <div>
      阿斯兰的看法就
      
    </div>
  )
}