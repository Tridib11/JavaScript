import React, { useState, useEffect } from 'react';
import './App.css'

function App(){
    return (
        <>
            <MyComponent/>
        </>
    )
}


function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.log("Component mounted");
    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("Compoenent Unmounted");
    };
  }, []);

  // Render UI

  return <div>
    From inside my component
  </div>
}

export default App