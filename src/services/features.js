import axios from 'axios'

const URL_BASE = 'http://localhost:8000/api/v1/features'

export const correlationMatrix = (fileParams, correlationValue) => {
  const headers = {
    'accept': 'application/json', 
    'Content-Type': 'application/json'
  }
  return axios.post(`${URL_BASE}/matrix`, {...fileParams, threshold: correlationValue}, {headers})
}

export const previewDataPreprocessed = (fileParams, target, encode) => {
  const headers = {
    'accept': 'application/json', 
    'Content-Type': 'application/json'
  }
  return axios.post(`${URL_BASE}/preprocess`, {...fileParams, target, encode}, {headers})
}

export const featureImportance = (fileParams, model) => {
  const headers = {
    'accept': 'application/json', 
    'Content-Type': 'application/json'
  }
  return axios.post(`${URL_BASE}/model`, {...fileParams, model}, {headers})
}