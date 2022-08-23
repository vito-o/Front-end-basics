import ReactDOM from 'react-dom';


type Props = { name: string; age?: number }

const Hello  = ({name, age}: Props) => (
  <div>
    <span>你好！，我叫{name}， 我{age}岁</span>
  </div>
)

const App = () => (
  <div>
    <Hello name="zhangsna"/>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
