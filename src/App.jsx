import { useSelector } from 'react-redux';
import Input from './Components/Input';
import Display from './Components/Display';
import Display2 from './Components/Display2';
function App(){
  const todos = useSelector(state=>state)
  console.log(todos)
  return(
    <>
      <Input/>
      {todos.map( todo => <Display2 key={todo.id} {...todo} />)}
    </>
  )
}
export default App;