function ExpenseList({expenses,deleteExpense}){

  return(

    <div>

      <h3>🧾 Recent Expenses</h3>

      {expenses.length===0 && <p>No expenses yet</p>}

      {expenses.map(e=>(

        <div className="expense" key={e.id}>

          <span>{e.name}</span>

          <span>{e.category}</span>

          <span>${e.amount}</span>

          <button
            onClick={()=>deleteExpense(e.id)}
          >
            Delete
          </button>

        </div>

      ))}

    </div>

  )
}

export default ExpenseList