import { useState, useEffect } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"
import ExpenseChart from "./components/ExpenseChart"
import CurrencyConverter from "./components/CurrencyConverter"
import DashboardCards from "./components/DashboardCards"
import "./App.css"

function App() {

  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem("expenses")
    if (saved) {
      setExpenses(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id))
  }

  return (

    <div className="dashboard">

      <header className="header">
        <h1>Startup Expense Dashboard</h1>
      </header>

      <DashboardCards expenses={expenses} />

      <div className="grid">

        <div className="card">
          <ExpenseForm addExpense={addExpense} />
        </div>

        <div className="card">
          <CurrencyConverter expenses={expenses} />
        </div>

        <div className="card">
          <ExpenseChart expenses={expenses} />
        </div>

        <div className="card">
          <ExpenseList
            expenses={expenses}
            deleteExpense={deleteExpense}
          />
        </div>

      </div>

    </div>

  )
}

export default App
