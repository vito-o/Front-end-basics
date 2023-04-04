import { useEffect, useMemo, useState } from "react"

export default function UserMemoTest() {

  const [students, setStudents] = useState([])
  // const [studentNames, setStudentNames] = useState([])

  /* useEffect(() => {
    console.log("students变化了", students)
    const studentNames = students.map(o => o.name)
    setStudentNames(studentNames)
  }, students) */

  const studentNames = useMemo(() => {
    return students.map(o => o.name)
  }, [students])

  setTimeout(() => {
    setStudents(() => [
      {name: 'zhangsan', age: '11'},
      {name: 'lisi', age: '12'},
      {name: 'wangwu', age: '13'},
      {name: 'zhaoliu', age: '14'},
    ])
  }, 2000)

  return (
    <div>{studentNames}</div>
  )
}