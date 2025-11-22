import {
  Chart as ChartJS, 
  PointElement, 
  Tooltip
} from 'chart.js'
import { Scatter } from 'react-chartjs-2'

ChartJS.register(
  PointElement, 
  Tooltip
)

const DispersionChart = ({ axis, data }) => {
    const options = {
      scales: {
        x: {
          type: 'linear', 
          title: {
            display: true, 
            text: axis.x
          }, 
          grid: {display: false}, 
          offset: true
        }, 
        y: { 
          title: {
            display: true, 
            text: axis.y
          }, 
          grid: {display: false}
        }
      }
    }
  
    const dataGraph = {
      labels: data.x, 
      datasets: [
        {
          type: 'scatter',
          data: data.y,
          backgroundColor: 'rgb(183, 163, 224)', 
          borderColor: 'rgb(18, 14, 26)', 
          borderWidth: 1, 
          borderSkipped: false
        }
      ]
    }
  
    return (
      <Scatter options = {options} data = {dataGraph} />
    )
}

export default DispersionChart