import React, { useState } from "react";

function ict() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});
  fetch("https://google.com", async (res) => {
    const json = await res.json();
    setBankData({ income: 100 });
    //Assume it is  {income : 100}
  });

  setTimeout(() => {
    setExchangeData({
      returns: 100,
    });
  }, 1000);

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return <div>hi there, your income tax returns are {incomeTax}</div>;
}

export default ict;
