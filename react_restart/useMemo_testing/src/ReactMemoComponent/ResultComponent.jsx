import React from "react";
const ResultCompoenent = ({ marks, subject }) => {
  console.log("Inside result component");
  const percentageMarks = (80 * 100) / 100;
  return (
    <div>
      <h2>Result is : {marks}</h2>
      <h2>Percentage is : {percentageMarks}</h2>
      <h2>For subject : {subject}</h2>
    </div>
  );
};

export default React.memo(ResultCompoenent);
