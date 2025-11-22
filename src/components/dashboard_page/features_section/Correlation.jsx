import { useState, useEffect, useContext } from 'react'
import Table from '@/components/UI/Table'
import DataEmpty from '@/components/UI/DataEmpty'
import SubSection from '@/components/UI/SubSection'
import FileMetadataContext from '@/context/FileMetadataContext'
import PageFiltersContext from '@/context/PageFiltersContext'
import { correlationMatrix } from '@/services/features.js'
import { createColumns } from '@/helpers/table.helpers.js'
import './styles/Correlation.css'

const Correlation = ({ ref }) => {
  const { fileMetadata } = useContext(FileMetadataContext)
  const { filters, setFilters } = useContext(PageFiltersContext)

  const [correlationValue, setCorrelationValue] = useState(filters['feature-selection'].correlation.correlationValue)
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await correlationMatrix({
        delimiter: fileMetadata.delimiter, 
        decimal: fileMetadata.decimal
      }, correlationValue)

      if (res.status === 200) {
        if (res.data?.state === 'Success') {
          setData(res.data.data)
        }
      }
    }

    getData()
  }, [fileMetadata, correlationValue])

  const handleCorrelationValue = (event) => {
    setCorrelationValue(event.target.value)
    setFilters({
      ...filters, 
      'feature-selection': {
        ...filters['feature-selection'], 
        correlation: {
          correlationValue: event.target.value
        }
      }
    })
  }

  return (
    <SubSection 
      ref = {ref} 
      id = 'correlation' 
      title = 'Matriz de correlación' 
      description = 'La matriz de correlación presenta una tabla filtrada que muestra exclusivamente los pares de variables cuya correlación de Pearson supera un umbral configurable, el cual puede ajustarse en un rango entre 0.7 y 0.99, en esta tabla se identifican las relaciones lineales más significativas entre los atributos.'>
        <div className = 'correlation-content'>
          <div className = 'correlation-input'>
            <span className = 'text-strong'>
              Umbral de correlación:
            </span>
            <input 
              className = 'custom-input' 
              type = 'number' 
              min = {0.5} 
              max = {0.99} 
              step = {0.01} 
              value = {correlationValue} 
              onChange = {handleCorrelationValue} />
          </div>

          { (data && data?.length > 0) ? 
            <div className = 'correlation-table'>
              <Table 
                columns = {createColumns(data)} 
                data = {data} />
            </div> : <DataEmpty type = 'table' />
          }
        </div>
    </SubSection>
  )
}

export default Correlation