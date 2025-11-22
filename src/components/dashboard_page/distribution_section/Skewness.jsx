import { useState, useEffect, useContext } from 'react'
import Table from '@/components/UI/Table'
import DataEmpty from '@/components/UI/DataEmpty'
import SubSection from '@/components/UI/SubSection'
import FileMetadataContext from '@/context/FileMetadataContext'
import { createColumns } from '@/helpers/table.helpers.js'
import { skewnessData } from '@/services/distribution.js'
import './styles/Skewness.css'

const Skewness = ({ ref }) => {
  const { fileMetadata } = useContext(FileMetadataContext)

  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await skewnessData({
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
      id = 'skewness' 
      title = 'Medida de asimetría' 
      description = 'La medidas de asimetría presenta una tabla con el grado de desviación de la distribución para cada atributo respecto a una curva normal simétrica. El valor numérico del sesgo indica la dirección y magnitud de la asimetría: los valores cercanos a cero reflejan distribuciones simétricas, mientras que los valores negativos indican sesgo a la izquierda y los positivos, sesgo a la derecha.'>
        { (data && data.length > 0) ? 
          <div className = 'skewness-content'>
            <Table 
              columns = {createColumns(data)} 
              data = {data} />
          </div> : <DataEmpty type = 'table' />
        }
    </SubSection>
  )
}

export default Skewness