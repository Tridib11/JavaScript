import React, { useState, useEffect } from 'react';

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
}