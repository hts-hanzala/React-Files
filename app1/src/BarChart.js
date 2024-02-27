import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart, registerables} from "chart.js"
Chart.register(...registerables)

export default function BarChart() {
    const data = {
        labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets : [{
            label: "Monthly Consumption of Internet",
            backgroundColor : "#2196F3",
            borderColor : "#3F51B5",
            borderWidth: 1,
            hoverBackgroundColor : "#2196F3",
            data : [45, 40, 59, 65, 80, 75, 105]
        }]
    }
  return (
    <div>
      <Bar data={data}/>
    </div>
  )
}
