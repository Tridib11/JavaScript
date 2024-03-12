import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <Count />
    </div>
  );
}

function Count() {
  console.log("Count re-rendered");
  return (
    <div>
      <RecoilRoot>
        <CountRenderer />
        <br /><br />
        <Buttons />
      </RecoilRoot>
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
      <EvenCountRenderer/>
    </div>
  );
}

function EvenCountRenderer(){
  const isEven=useRecoilValue(evenSelector)
  return <div>
    {isEven ? "It is even":null}
  </div>

}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("Buttons rerendered");
  return (
    <div>
      <button
        onClick={() => {
          setCount(count=>count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count=>count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
