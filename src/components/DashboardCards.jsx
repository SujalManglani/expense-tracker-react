function DashboardCards({ expenses }) {

  const total = expenses.reduce((sum, e) => sum + e.amount, 0)
  const count = expenses.length
  const avg = count ? total / count : 0

  return (

    <div className="cards">

      <div className="stat">
        <h4>Total Spent</h4>
        <p>₹{total.toFixed(2)}</p>
      </div>

      <div className="stat">
        <h4>Transactions</h4>
        <p>{count}</p>
      </div>

      <div className="stat">
        <h4>Average</h4>
        <p>₹{avg.toFixed(2)}</p>
      </div>

    </div>

  )
}

export default DashboardCards