import { useState, useEffect, useContext } from 'react'
import HistogramChart from '@/components/UI/HistogramChart'
import DataEmpty from '@/components/UI/DataEmpty'
import SubSection from '@/components/UI/SubSection'
import FileMetadataContext from '@/context/FileMetadataContext'
import PageFiltersContext from '@/context/PageFiltersContext'
import { histogramData } from '@/services/distribution.js'
import './styles/Histogram.css'

const Histogram = ({ ref }) => {
  const { fileMetadata } = useContext(FileMetadataContext)
  const { filters, setFilters } = useContext(PageFiltersContext)

  const [histogramParams, setHistogramParams] = useState(filters['distribution'].histogram)
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await histogramData({
        delimiter: fileMetadata.delimiter, 
        decimal: fileMetadata.decimal
      }, histogramParams)

      if (res.status === 200) {
        if (res.data?.state === 'Success') {
          setData(res.data.data)
        }
      }
    }

    getData()
  }, [fileMetadata, histogramParams])

  const handleHistogramParams = (event) => {
    const { name, value } = event.target
    setHistogramParams({
      ...histogramParams, 
      [name]: value
    })

    setFilters({
      ...filters, 
      'distribution': {
        histogram: {
          ...histogramParams, 
          [name]: value
        }
      }
    })
  }

  return (
    <SubSection 
      ref = {ref} 
      id = 'histogram' 
      title = 'Histograma con densidad' 
      description = 'El histograma con densidad presenta una visualización interactiva que combina un histograma con una estimación de densidad de kernel (KDE) por atributo, permitiendo el ajuste de los bins o intervalos del histograma para analizar la concentración y forma de la distribución de los datos.'>
        <div className = 'histogram-content'>
          <div className = 'histogram-inputs'>
            <div className = 'histogram-input'>
              <span className = 'text-strong'>
                Atributo:
              </span>
              <select 
                className = 'custom-select'
                name = 'attribute' 
                value = {histogramParams.attribute} 
                onChange = {handleHistogramParams}>
                  { fileMetadata.attributes.numeric.map(attribute => (
                    <option key = {attribute} value = {attribute}>
                      {attribute}
                    </option>
                  )) }
              </select>
            </div>

            <div className = 'histogram-input'>
              <span className = 'text-strong'>Numero de intervalos: </span>
              <input 
                className = 'custom-input' 
                name = 'bins' 
                type = 'number' 
                min = {10}
                max = {24}
                step = {1} 
                value = {histogramParams.bins} 
                onChange = {handleHistogramParams} />
            </div>
          </div>

          { data ? 
            <div className = 'histogram-chart'>
              <HistogramChart hist = {data.hist} kde = {data.kde} />
            </div> : <DataEmpty type = 'chart' />
          }
        </div>
    </SubSection>
  )
}

export default Histogram