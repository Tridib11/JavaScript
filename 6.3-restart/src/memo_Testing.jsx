import React, { useEffect, useState, useMemo, memo, useCallback } from "react";

function memo_Testing() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 5000);
  }, []);
  const calculateCryptoReturns = useCallback(function () {
    return exchange1Data.returns + exchange2Data.returns;
  });
  return (
    <div>
      <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns} />
    </div>
  );
}

const CryptoGainsCalculator = memo(function ({ calculateCryptoReturns }) {
  console.log("Crypto-Child re-rendered");
  return <div>Your crypto returns are {calculateCryptoReturns()}</div>;
});

export default memo_Testing;
