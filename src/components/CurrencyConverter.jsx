import { useState,useEffect } from "react"
import axios from "axios"

function CurrencyConverter({ expenses }) {

  const [currency,setCurrency] = useState("EUR")
  const [rate,setRate] = useState(1)
  const [error,setError] = useState("")

  const total = expenses.reduce((sum,e)=>sum + e.amount,0)

  useEffect(()=>{

    axios
      .get(`https://api.frankfurter.app/latest?from=USD&to=${currency}`)
      .then(res=>{
        setRate(res.data.rates[currency])
        setError("")
      })
      .catch(()=>{
        setError("Currency API failed")
      })

  },[currency])

  return(

    <div>

      <h3>Currency Converter</h3>

      <select
        value={currency}
        onChange={(e)=>setCurrency(e.target.value)}
      >
        <option>EUR</option>
        <option>GBP</option>
        <option>INR</option>
        <option>JPY</option>
      </select>

      {error ? (
        <p>{error}</p>
      ):(
        <p>
          Total in {currency}: {(total * rate).toFixed(2)}
        </p>
      )}

    </div>

  )
}

export default CurrencyConverter