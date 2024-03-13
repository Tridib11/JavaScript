
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './selector_atom';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />

  </RecoilRoot>
}

function Todo({id}) {
   const todo=useRecoilValue(todosAtomFamily(id))

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App