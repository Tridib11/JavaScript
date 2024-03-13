import React from "react";

export default function NewApp() {
  return (
    // <div className='bg-red-500 md:bg-blue-500'>
    //   hi there
    // </div>
    <>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-red-500 ">Child 1</div>
        <div className="bg-blue-500 ">Child 2</div>
        <div className="bg-green-500 ">Child 3</div>
      </div>
    </>
  );
} 
  