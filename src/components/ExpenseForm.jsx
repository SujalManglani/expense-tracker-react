import { useState } from "react"

function ExpenseForm({addExpense}){

  const [name,setName] = useState("")
  const [amount,setAmount] = useState("")
  const [category,setCategory] = useState("Food")

  const handleSubmit=(e)=>{
    e.preventDefault()

    addExpense({
      name,
      amount:parseFloat(amount),
      category
    })

    setName("")
    setAmount("")
  }

  return(

    <form onSubmit={handleSubmit}>

      <h3>Add Expense</h3>

      <input
        placeholder="Expense name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        required
      />

      <select
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Marketing</option>
        <option>Utilities</option>
        <option>Other</option>
      </select>

      <button>Add Expense</button>

    </form>

  )
}

export default ExpenseForm