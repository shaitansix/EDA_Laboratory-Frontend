import { useState, useEffect, useContext } from 'react'
import DispersionChart from '@/components/UI/DispersionChart'
import DataEmpty from '@/components/UI/DataEmpty'
import SubSection from '@/components/UI/SubSection'
import FileMetadataContext from '@/context/FileMetadataContext'
import PageFiltersContext from '@/context/PageFiltersContext'
import { dispersionData } from '@/services/correlation.js'
import './styles/Dispersion.css'

const Dispersion = ({ ref }) => {
  const { fileMetadata } = useContext(FileMetadataContext)
  const { filters, setFilters } = useContext(PageFiltersContext)

  const [dispersionParams, setDispersionParams] = useState(filters['correlations'].dispersion)
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await dispersionData({
        delimiter: fileMetadata.delimiter, 
        decimal: fileMetadata.decimal
      }, dispersionParams)

      if (res.status === 200) {
        if (res.data?.state === 'Success') {
          setData(res.data.data)
        }
      }
    }

    getData()
  }, [fileMetadata, dispersionParams])

  const handleDispersionParams = (event) => {
    const { name, value } = event.target
    setDispersionParams({
      ...dispersionParams, 
      [name]: value
    })

    setFilters({
      ...filters, 
      'correlations': {
        dispersion: {
          ...dispersionParams, 
          [name]: value
        }
      }
    })
  }

  return (
    <SubSection 
      ref = {ref} 
      id = 'dispersion' 
      title = 'Gráfico de dispersión'
      description = 'El gráfico de dispersión presenta una visualización interactiva que permite explorar relaciones entre variables mediante la selección de atributos específicos para los ejes X e Y, facilitando el análisis de patrones, tendencias y posibles correlaciones entre diferentes características del dataset.'>
        <div className = 'dispersion-content'>
          <div className = 'dispersion-inputs'>
            <div className = 'dispersion-input'>
              <span className = 'text-strong'>
                Atributo del eje X:
              </span>
              <select 
                className = 'custom-select' 
                name = 'attribute_x' 
                value = {dispersionParams.attribute_x} 
                onChange = {handleDispersionParams}>
                  { fileMetadata.attributes.numeric.map(attribute => (
                    <option key = {attribute} value = {attribute}>
                      {attribute}
                    </option>
                  )) }
              </select>
            </div>

            <div className = 'dispersion-input'>
              <span className = 'text-strong'>
                Atributo del eje Y:
              </span>
              <select 
                className = 'custom-select' 
                name = 'attribute_y' 
                value = {dispersionParams.attribute_y} 
                onChange = {handleDispersionParams}>
                  { fileMetadata.attributes.numeric.map(attribute => (
                    <option key = {attribute} value = {attribute}>
                      {attribute}
                    </option>
                  )) }
              </select>
            </div>
          </div>
          
          { data ? 
            <div className = 'dispersion-chart'>
              <DispersionChart 
                axis = {{ x: dispersionParams.attribute_x, y: dispersionParams.attribute_y }} 
                data = {data} />
            </div> : <DataEmpty type = 'chart' />
          }
        </div>
    </SubSection>
  )
}

export default Dispersion