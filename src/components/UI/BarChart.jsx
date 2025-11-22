import {
  Chart as ChartJS, 
  CategoryScale, 
  BarElement, 
  Tooltip
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale, 
  BarElement, 
  Tooltip
)

const BarChart = ({ data }) => {
  const options = {
    indexAxis: 'y', 
    scales: {
      x: {
        type: 'linear', 
        title: {
          display: true, 
          text: 'Correlación'
        }, 
        grid: {display: false}, 
        offset: false
      }, 
      y: {
        grid: {display: false}
      }
    }
  }

  const dataGraph = {
    labels: data.y,
    datasets: [
      {
        type: 'bar',
        data: data.x, 
        backgroundColor: 'rgb(183, 163, 224)', 
        borderColor: 'rgb(18, 14, 26)', 
        borderWidth: 1, 
        borderSkipped: false
      }
    ], 
  }

  return (
    <Bar options = {options} data = {dataGraph} />
  )
}

export default BarChart