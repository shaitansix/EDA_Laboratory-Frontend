import { useEffect, useState, useContext } from 'react'
import SubSection from '@/components/UI/SubSection'
import DataEmpty from '@/components/UI/DataEmpty'
import FileMetadataContext from '@/context/FileMetadataContext'
import { summaryData } from '@/services/information.js'
import './styles/Summary.css'


const Summary = ({ ref }) => {
  const { fileMetadata } = useContext(FileMetadataContext)

  const [data, setData] = useState(null)

  useEffect(() => {
    const getSummary = async () => {
      const res = await summaryData({
        delimiter: fileMetadata.delimiter, 
        decimal: fileMetadata.decimal
      }, './data/dataset.csv')
      
      if (res.status === 200) {
        if (res.data?.state === 'Success') {
          setData(res.data.data)
        }
      }
    }

    getSummary()
  }, [fileMetadata])

  return (
    <SubSection 
      ref = {ref} 
      id = 'summary'  
      title = 'Resumen del dataset' 
      description = 'El resumen del dataset presenta su estructura básica, detallando el número total de instancias o registros que contiene, la cantidad de atributos o características que describen cada una de ellas, y una evaluación de su integridad mediante el recuento de valores nulos presentes en todo el conjunto de datos.'>
        { data ? 
          <div className = 'summary-content'>
            <span>
              <span className = 'text-strong'>Instancias:</span> {data.instances}
            </span>
            <span>
              <span className = 'text-strong'>Atributos:</span> {data.attributes}
            </span>
            <span>
              <span className = 'text-strong'>Nulos:</span> {data.null}
            </span>
          </div> : <DataEmpty type = 'data'/>
        }
    </SubSection>
  )
}

export default Summary