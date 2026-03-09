function Summary({ expenses }) {

  const total = expenses.reduce((sum,e)=>sum + e.amount,0)

  const categories = {}

  expenses.forEach(e=>{
    categories[e.category] =
    (categories[e.category] || 0) + e.amount
  })

  return(

    <div className="summary">

      <h2>Total Spending</h2>

      <div className="total">
        ${total.toFixed(2)}
      </div>

      <h3>Category Breakdown</h3>

      {Object.keys(categories).map(cat=>(
        <p key={cat}>
          {cat}: ${categories[cat].toFixed(2)}
        </p>
      ))}

    </div>

  )
}

export default Summary