import React, { useMemo } from "react";
const NameCompoenent = ({ Name }) => {
  const memoizedName = useMemo(() => {
    console.log("Inside Name component");
    return <h2>Name is : {Name}</h2>;
  }, [Name]);
  return memoizedName
};

export default NameCompoenent;
