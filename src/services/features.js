import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL
const URL_BASE = `${API_URL}/api/v1/features`

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