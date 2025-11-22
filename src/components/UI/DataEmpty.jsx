import { DataEmptyImage, TableEmptyImage, ChartEmptyImage } from '@/icons/Icons'
import './styles/DataEmpty.css'

const DataEmpty = ({ type = 'data' }) => {
  return (
    <article className = 'data_empty-container'>
      {type === 'data' && <DataEmptyImage className = 'data_empty-image' />}
      {type === 'table' && <TableEmptyImage className = 'data_empty-image' />}
      {type === 'chart' && <ChartEmptyImage className = 'data_empty-image' />}
    </article>
  )
}

export default DataEmpty