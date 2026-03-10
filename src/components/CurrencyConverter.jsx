import { useState, useEffect } from "react";
import axios from "axios";

function CurrencyConverter({ expenses }) {

  const [currency, setCurrency] = useState("INR"); // default changed to INR
  const [rate, setRate] = useState(1);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  useEffect(() => {
    axios
      .get(`https://api.frankfurter.app/latest?from=USD&to=${currency}`)
      .then((res) => {
        setRate(res.data.rates[currency]);
      });
  }, [currency]);

  return (
    <div>
      <h3>Currency Converter</h3>

      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option>USD</option>
        <option>EUR</option>
        <option>GBP</option>
      </select>

      <p>
        Total in {currency}: {(total * rate).toFixed(2)}
      </p>
    </div>
  );
}

export default CurrencyConverter;

