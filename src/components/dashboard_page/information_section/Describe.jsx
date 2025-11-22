import { useState, useEffect, useContext } from 'react'
import Table from '@/components/UI/Table'
import DataEmpty from '@/components/UI/DataEmpty'
import SubSection from '@/components/UI/SubSection'
import FileMetadataContext from '@/context/FileMetadataContext'
import { describeData } from '@/services/information.js'
import { createColumns } from '@/helpers/table.helpers.js'
import './styles/Describe.css'

const Describe = ({ ref }) => {
  const { fileMetadata } = useContext(FileMetadataContext)

  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await describeData({
        delimiter: fileMetadata.delimiter, 
        decimal: fileMetadata.decimal
      })

      if (res.status === 200) {
        if (res.data?.state === 'Success') {
          setData(res.data.data)
        }
      }
    }

    getData()
  }, [fileMetadata])

  return (
    <SubSection
      ref = {ref} 
      id = 'describe' 
      title = 'Estadísticas descriptivas' 
      description = 'En estadísticas descriptivas, se presenta una tabla de resumen que contiene las principales métricas de distribución y tendencia para las variables del conjunto de datos, en la primera columna define las medidas calculadas, como la media, la desviación estándar y los percentiles, mientras que las columnas subsiguientes muestran los valores correspondientes para cada atributo, ofreciendo una visión cuantitativa del comportamiento de la información.'>
        { data ? 
          <div className = 'describe-content'>
            <Table 
              columns = {createColumns(data)} 
              data = {data} />
          </div>  : <DataEmpty type = 'table' />
        }
    </SubSection>
  )
}

export default Describe