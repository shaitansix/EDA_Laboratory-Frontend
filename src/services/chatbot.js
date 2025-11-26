import axios from 'axios'
import { summaryData, attributesInfo, previewData, describeData } from '@/services/information.js'
import { skewnessData, histogramData } from '@/services/distribution.js'
import { correlationMatrix, dispersionData } from '@/services/correlation.js'
import { correlationMatrix as correlationMatrixFeatures, previewDataPreprocessed, featureImportance } from '@/services/features.js'

// const URL_BASE = 'http://localhost:8000/api/v1/chatbot'
const URL_BASE = 'http://lb-edalab-1031131010.us-east-2.elb.amazonaws.com/api/v1/chatbot'

export const loadData = async (path, fileParams, filters) => {
  if (path === 'general-information') {
    const summaryRes = await summaryData(fileParams)
    const attributesRes = await attributesInfo(fileParams)
    const previewRes = await previewData(fileParams, filters.preview.numInstances)
    const describeRes = await describeData(fileParams)
    
    const data = {
      pagina: 'Información general', 
      secciones: []
    }
    if (summaryRes.status === 200) {
      if (summaryRes.data?.state === 'Success') {
        data.secciones.push({
          'Resumen del dataset': summaryRes.data.data
        })
      }
    }

    if (attributesRes.status === 200) {
      if (attributesRes.data?.state === 'Success') {
        data.secciones.push({
          'Estructura de los atributos': attributesRes.data.data
        })
      }
    }

    if (previewRes.status === 200) {
      if (previewRes.data?.state === 'Success') {
        data.secciones.push({
          'Vista previa del dataset': previewRes.data.data
        })
      }
    }

    if (describeRes.status === 200) {
      if (describeRes.data?.state === 'Success') {
        data.secciones.push({
          'Estatísticas descriptivas': describeRes.data.data
        })
      }
    }

    return data
  } else if (path === 'distribution') {
    const skewnessRes = await skewnessData(fileParams)
    const histogramRes = await histogramData(fileParams, filters.histogram)

    const data = {
      pagina: 'Distribución',
      secciones: []
    }
    if (skewnessRes.status === 200) {
      if (skewnessRes.data?.state === 'Success') {
        data.secciones.push({
          'Medida de asimetría': skewnessRes.data.data
        })
      }
    }

    if (histogramRes.status === 200) {
      if (histogramRes.data?.state === 'Success') {
        data.secciones.push({
          'Histograma sin densidad': histogramRes.data.data
        })
      }
    }

    return data
  } else if (path === 'correlations') {
    const matrixRes = await correlationMatrix(fileParams)
    const dispersionRes = await dispersionData(fileParams, filters.dispersion)

    const data = {
      pagina: 'Correlaciónes', 
      secciones: []
    }
    if (matrixRes.status === 200) {
      if (matrixRes.data?.state === 'Success') {
        data.secciones.push({
          'Matriz de correlaciones': matrixRes.data.data
        })
      }
    }

    if (dispersionRes.status === 200) {
      if (dispersionRes.data?.state === 'Success') {
        data.secciones.push({
          'Gráfico de dispersión': dispersionRes.data.data
        })
      }
    }

    return data
  } else if (path === 'feature-selection') {
    const matrixRes = await correlationMatrixFeatures(fileParams, filters.correlation.correlationValue)
    const preprocessRes = await previewDataPreprocessed(fileParams, filters.model.target, filters.model.encode)

    const data = {
      page: 'Selección de características', 
      secciones: []
    }
    if (matrixRes.status === 200) {
      if (matrixRes.data?.state === 'Success') {
        data.secciones.push({
          'Features selection por correlación': matrixRes.data.data
        })
      }
    }

    if (preprocessRes.status === 200) {
      if (preprocessRes.data?.state === 'Success') {
        const feature = {
          'Datos de entrenamiento': preprocessRes.data.data
        }

        const modelRes = await featureImportance(fileParams, filters.model.model)

        if (modelRes.status === 200) {
          if (modelRes.data?.state === 'Success') {
            feature['Resultados del modelo'] = modelRes.data.data

            data.secciones.push({
              'Modelo de ML': feature
            })
          }
        }
      }
    }
    
    return data
  }
}

const getSystemPrompt = (path) => {
  const SYSTEM_PROMPT = `
    Eres el asistente oficial de EDA Laboratory, creado para apoyar el análisis exploratorio de datos.
    Tu tarea es ayudar al usuario a interpretar la información disponible exclusivamente en la página "${path}", presentada como datos semiestructurados en formato JSON.

    Debes cumplir las siguientes reglas:

    - Responde de forma clara, breve y directa.
    - Nunca generes tablas en Markdown; limítate a texto simple.
    - Responde solo sobre la información presente en la página actual y sus secciones correspondientes.
    - Identifica patrones, valores relevantes, diferencias, tendencias u observaciones prácticas.
    - Explica los conceptos de manera accesible, evitando tecnicismos innecesarios.
    - Si el usuario pregunta algo que no esté cubierto por los datos del JSON o no hay evidencia clara, indícalo amablemente.
    - No inventes información ni completes vacíos con suposiciones.

    A continuación se te proporcionan los datos JSON que debes usar como única base para tus respuestas:
    `
  return SYSTEM_PROMPT
}

export const ollamaChat = (data, history) => {
  const headers = {
    'accept': 'application/json', 
    'Content-Type': 'application/json'
  }

  const messages = [
    {
      role: 'system', 
      content: getSystemPrompt(data.pagina)
    }, 
    {
      role: 'system', 
      content: JSON.stringify(data)
    }, 
    {
      role: 'system', 
      content: 'Responde siempre de forma concisa, natural, centrada en lo más relevante, limitate exclusivamente a temas relacionados con ciencia de datos y la información proporcionados.'
    }
  ]

  const payload = {
    history: [...messages, ...history]
  }
  return axios.post(`${URL_BASE}/query`, payload, {headers})
}