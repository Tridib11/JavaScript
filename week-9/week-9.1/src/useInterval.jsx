import { useEffect, useState } from 'react';


function useInterval(fn,timeOut){
    useEffect(()=>{
        setInterval(()=>{
            fn()
        },timeOut)
        return ()=>{
            clearInterval(timeOut)
        }
    },[timeOut])
}
function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}

export default App