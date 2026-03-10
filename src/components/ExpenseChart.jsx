import { Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

function ExpenseChart({ expenses }) {

  const categories = {}

  expenses.forEach(e => {
    categories[e.category] = (categories[e.category] || 0) + e.amount
  })

  const data = {
    labels: Object.keys(categories),

    datasets: [{
      data: Object.values(categories),

      backgroundColor: [
        "#6366f1",
        "#22c55e",
        "#f59e0b",
        "#ef4444",
        "#8b5cf6"
      ]
    }]
  }

  return (

    <div>

      <h3>Expense Distribution</h3>

      {expenses.length > 0 ?
        <Pie data={data} />
        :
        <p>No chart data</p>
      }

    </div>

  )
}

export default ExpenseChart