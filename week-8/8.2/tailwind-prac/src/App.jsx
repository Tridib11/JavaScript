import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
    <h1>Flex</h1>
    <br />
      <div className="flex justify-center">
        <div className="bg-red-500">hi</div>
        <div className="bg-green-500">hi</div>
        <div className="bg-blue-500">hi</div>
      </div>

      <br />
      <br />

      <h1>Grid</h1>
      <br />

      <div className="grid grid-cols-10  ">
        <div className="bg-red-500 col-span-4">hi</div>
        <div className="bg-green-500 col-span-4">hi</div>
        <div className="bg-blue-500 col-span-2">hi</div>
      </div>
    </>
  );
}

export default App;
