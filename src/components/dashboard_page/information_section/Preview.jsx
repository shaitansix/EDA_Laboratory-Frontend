import { useState, useEffect, useContext } from 'react'
import Table from '@/components/UI/Table'
import DataEmpty from '@/components/UI/DataEmpty'
import SubSection from '@/components/UI/SubSection'
import FileMetadataContext from '@/context/FileMetadataContext'
import PageFiltersContext from '@/context/PageFiltersContext'
import { previewData } from '@/services/information.js'
import { createColumns } from '@/helpers/table.helpers.js'
import './styles/Preview.css'

const Preview = ({ ref }) => {
  const { fileMetadata } = useContext(FileMetadataContext)
  const { filters, setFilters } = useContext(PageFiltersContext)

  const [numInstances, setNumInstances] = useState(filters['general-information'].preview.numInstances)
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await previewData({
        delimiter: fileMetadata.delimiter, 
        decimal: fileMetadata.decimal
      }, numInstances)
      
      if (res.status === 200) {
        if (res.data?.state === 'Success') {
          setData(res.data.data)
        }
      }
    }

    getData()
  }, [fileMetadata, numInstances])

  const handleNumInstances = (event) => {
    setNumInstances(event.target.value)
    setFilters({
      ...filters, 
      'general-information': {
        preview: {
          numInstances: event.target.value
        }
      }
    })
  }

  return (
    <SubSection 
      ref = {ref} 
      id = 'preview' 
      title = 'Vista previa de datos' 
      description = 'La vista previa de datos, presenta una tabla con una muestra representativa de los primeros n registros contenidos en el conjunto de datos, con el propósito de ofrecer una inspección inicial de la información, exhibiendo los datos de manera estructurada para una comprensión rápida de los valores y el formato de la data.'>
        <div className = 'preview-content'>
          <div className = 'preview-input'>
            <span className = 'text-strong'>
              Numero de instancias:
            </span>
            <input 
              className = 'custom-input' 
              type = 'number' 
              min = {5} 
              max = {20} 
              step = {1} 
              value = {numInstances} 
              onChange = {handleNumInstances} />
          </div>

          { data ? 
            <div className = 'preview-table'>
              <Table 
                columns = {createColumns(data)} 
                data = {data} />
            </div> : <DataEmpty type = 'table' />
          }
        </div>
    </SubSection>
  )
}

export default Preview