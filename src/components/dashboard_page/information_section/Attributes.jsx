import { useState, useEffect, useContext } from 'react'
import Table from '@/components/UI/Table'
import DataEmpty from '@/components/UI/DataEmpty'
import SubSection from '@/components/UI/SubSection'
import FileMetadataContext from '@/context/FileMetadataContext'
import { attributesInfo } from '@/services/information.js'
import { createColumns } from '@/helpers/table.helpers.js'
import './styles/Attributes.css'

const Attributes = ({ ref }) => {
  const { fileMetadata } = useContext(FileMetadataContext)

  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await attributesInfo({
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
      id = 'attributes' 
      title = 'Estructura de atributos' 
      description = 'La estructura de atributos, describe la composición fundamental del conjunto de datos, detallando para cada atributo su nombre, el tipo de dato que almacena (como numérico o categórico), el porcentaje de valores nulos y la cantidad de valores únicos que contiene.'>
        { data ? 
          <div className = 'attributes-content'>
            <Table 
              columns = {createColumns(data)} 
              data = {data} /> 
          </div> : <DataEmpty type = 'table' />
        }
    </SubSection>
  )
}

export default Attributes