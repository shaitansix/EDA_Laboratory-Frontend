import { useState, useEffect, useContext } from 'react'
import Table from '@/components/UI/Table'
import DataEmpty from '@/components/UI/DataEmpty'
import SubSection from '@/components/UI/SubSection'
import FileMetadataContext from '@/context/FileMetadataContext'
import { correlationMatrix } from '@/services/correlation.js'
import { createColumns } from '@/helpers/table.helpers.js'
import './styles/Matrix.css'

const Matrix = ({ ref }) => {
  const { fileMetadata } = useContext(FileMetadataContext)

  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await correlationMatrix({
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
      id = 'matrix' 
      title = 'Matriz de correlación' 
      description = 'La matriz de correlación presenta una tabla que cuantifica las relaciones lineales entre pares de variables mediante el coeficiente de correlación de Pearson. La estructura muestra todas las combinaciones posibles entre atributos, con valores que oscilan entre -1 y 1, los valores cercanos a 1 revelan correlaciones positivas, los próximos a -1 indican correlaciones negativas, y los valores alrededor de 0 sugieren una relación lineal débil o nula entre las variables analizadas.'>
        { (data && data.length > 0) ? 
          <div className = 'matrix-content'>
            <Table 
              columns = {createColumns(data)} 
              data = {data} /> 
          </div> : <DataEmpty type = 'table' />
        }
    </SubSection>
  )
}

export default Matrix