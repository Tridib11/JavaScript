import { useState, memo, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(() => {
    console.log("Hi there");
  }, []);
  return (
    <div>
      <ButtonComponent inputFunction={inputFunction} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Clicked me ({count})
      </button>
    </div>
  );
}

const ButtonComponent = memo(({ inputFunction }) => {
  console.log("child rendered");
  return (
    <div>
      <button>Button Clicked</button>
    </div>
  );
});

export default App;
