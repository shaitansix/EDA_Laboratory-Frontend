import {
  Chart as ChartJS, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  Tooltip, 
  LineController, 
  BarController
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  Tooltip, 
  LineController, 
  BarController
)

const HistogramChart = ({ hist, kde }) => {
  const options = {
    scales: {
      x: {
        type: 'linear', 
        title: {
          display: true, 
          text: 'Valores'
        }, 
        grid: {display: false}, 
        offset: true
      }, 
      y: {
        beginAtZero: true, 
        title: {
          display: true, 
          text: 'Frecuencia'
        }, 
        grid: {display: false}
      }
    }, 
    datasets: {
      bar: {
        categoryPercentage: 1.0, 
        barPercentage: 1.0
      }, 
      line: {
        tension: 0.1
      }
    }
  }

  const dataGraph = {
    datasets: [
      {
        type: 'line', 
        data: kde, 
        borderColor: 'rgb(123, 79, 212)', 
        borderWidth: 2, 
        pointRadius: 0, 
        tension: 0.6, 
        fill: false
      }, 
      {
        type: 'bar',
        data: hist,
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

export default HistogramChart