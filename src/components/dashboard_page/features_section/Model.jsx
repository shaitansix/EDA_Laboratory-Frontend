import { useState, useEffect, useContext } from 'react'
import Table from '@/components/UI/Table'
import BarChart from '@/components/UI/BarChart'
import DataEmpty from '@/components/UI/DataEmpty'
import SubSection from '@/components/UI/SubSection'
import FileMetadataContext from '@/context/FileMetadataContext'
import PageFiltersContext from '@/context/PageFiltersContext'
import { previewDataPreprocessed, featureImportance } from '@/services/features.js'
import { createColumns } from '@/helpers/table.helpers.js'
import './styles/Model.css'

const Model = ({ ref }) => {
  const { fileMetadata } = useContext(FileMetadataContext)
  const { filters, setFilters } = useContext(PageFiltersContext)

  const [modelParams, setModelParams] = useState(filters['feature-selection'].model)
  const [dataPreprocessed, setDataPreprocessed] = useState(null)
  const [dataImportance, setDataImportance] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await previewDataPreprocessed({
        delimiter: fileMetadata.delimiter, 
        decimal: fileMetadata.decimal
      }, modelParams.target, modelParams.encode)

      if (res.status === 200) {
        if (res.data?.state === 'Success') {
          setDataPreprocessed(res.data.data)
        }
      }
    }

    getData()
  }, [fileMetadata, modelParams.target, modelParams.encode])

  const handleModelParams = (event) => {
    const { name } = event.target
    setModelParams({
      ...modelParams, 
      [name]: name === 'encode' ? event.target.checked : event.target.value
    })

    setFilters({
      ...filters, 
      'feature-selection': {
        ...filters['feature-selection'], 
        model: {
          ...modelParams, 
          [name]: name === 'encode' ? event.target.checked : event.target.value
        }
      }
    })
  }

  const handleFeatureImportance = async () => {
    const res = await featureImportance({
      delimiter: fileMetadata.delimiter, 
      decimal: fileMetadata.decimal
    }, modelParams.model)

    if (res.status === 200) {
      if (res.data?.state === 'Success') {
        setDataImportance(res.data.data)
      }
    }
  }

  return (
    <SubSection 
      ref = {ref} 
      id = 'model' 
      title = 'Modelo de ML' 
      description = 'El modelo de ML presenta un módulo que permite la selección de atributos relevantes mediante algoritmos de machine learning, incluyendo una previsualización de los datos de entrada, cuya estructura puede variar dependiendo de la configuración de codificación seleccionada(Onehot Encoding). Como resultado, se genera un gráfico de barras horizontales que muestra hasta 8 atributos con mayor importancia según el modelo entrenado, identificando así las variables más influyentes para la predicción.'>
        <div className = 'model-content'>
          <div className = 'model-inputs'>
            <div className = 'model-input'>
              <span className = 'text-strong'>
                Objetivo:
              </span>
              <select 
                className = 'custom-select' 
                name = 'target' 
                value = {modelParams.target} 
                onChange = {handleModelParams}>
                  { fileMetadata.attributes.all.map(attribute => (
                    <option key = {attribute} value = {attribute}>
                      {attribute}
                    </option>
                  )) }
              </select>
            </div>

            <div className = 'model-input'>
              <span className = 'text-strong'>
                Modelo:
              </span>
              <select 
                className = 'custom-select' 
                name = 'model' 
                value = {modelParams.model} 
                onChange = {handleModelParams}>
                  <option value = 'Extra Trees'>
                    Extra Trees
                  </option>
                  <option value = 'Random Forest'>
                    Random Forest
                  </option>
              </select>
            </div>

            <div className = 'model-input'>
              <input 
                type = 'checkbox' 
                name = 'encode' 
                checked = {modelParams.encode} 
                onChange = {handleModelParams} />
              <span className = 'text-strong'>
                Usar Onehot encoding
              </span>
            </div>

            { dataPreprocessed && 
              <button 
                className = 'custom-button' 
                onClick = {handleFeatureImportance}>
                  Entrenar
              </button>
            }
          </div>

          { dataPreprocessed ? 
            <div className = 'model-table'>
              <Table 
                columns = {createColumns(dataPreprocessed)} 
                data = {dataPreprocessed} />
            </div> : <DataEmpty type = 'table' />
          }

          { dataImportance ? 
            <div className = 'model-chart'>
              <BarChart data = {dataImportance} />
            </div> : dataPreprocessed && <DataEmpty type = 'chart' />
          }
        </div>
    </SubSection>
  )
}

export default Model