import { Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js"

ChartJS.register(ArcElement,Tooltip,Legend)

function ExpenseChart({ expenses }) {

  const categoryTotals = {}

  expenses.forEach(exp=>{
    categoryTotals[exp.category] =
      (categoryTotals[exp.category] || 0) + exp.amount
  })

  const data = {
    labels: Object.keys(categoryTotals),
    datasets:[
      {
        data:Object.values(categoryTotals),
        backgroundColor:[
          "#6366f1",
          "#8b5cf6",
          "#22c55e",
          "#f59e0b",
          "#ef4444"
        ]
      }
    ]
  }

  if(expenses.length === 0){
    return <p>No chart data yet</p>
  }

  return(

    <div style={{maxWidth:"400px",margin:"auto"}}>

      <h3>Expense Distribution</h3>

      <Pie data={data}/>

    </div>

  )
}

export default ExpenseChart