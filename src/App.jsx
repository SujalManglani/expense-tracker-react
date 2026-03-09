import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import CurrencyConverter from "./components/CurrencyConverter";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css";

function App() {

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  return (
    <div className="container">

      <h1>Expense Tracker</h1>

      <div className="card">
        <ExpenseForm addExpense={addExpense} />
      </div>

      <div className="card">
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
      </div>

      <div className="card">
        <Summary expenses={expenses}/>
      </div>

      <div className="card">
        <ExpenseChart expenses={expenses}/>
      </div>

      <div className="card">
        <CurrencyConverter expenses={expenses}/>
      </div>

    </div>
  );
}

export default App;
