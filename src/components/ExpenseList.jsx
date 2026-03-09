function ExpenseList({ expenses, deleteExpense }) {

  if(expenses.length === 0){
    return <p>No expenses yet</p>
  }

  return(
    <div>

      <h2>Expenses</h2>

      {expenses.map((e)=>(
        <div className="expense" key={e.id}>

          <span>{e.name}</span>
          <span>{e.category}</span>
          <span>${e.amount}</span>

          <button onClick={()=>deleteExpense(e.id)}>
            ✕
          </button>

        </div>
      ))}

    </div>
  )
}

export default ExpenseList