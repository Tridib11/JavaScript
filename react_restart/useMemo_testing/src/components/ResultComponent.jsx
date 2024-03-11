import React, { useMemo } from "react";
const ResultCompoenent = ({ marks }) => {
  const memoizedResult = useMemo(() => {
    console.log("Inside result component");
    return <h2>Result is : {marks}</h2>;
  },[marks]);
  return memoizedResult
};

export default ResultCompoenent;
