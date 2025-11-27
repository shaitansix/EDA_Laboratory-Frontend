import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL
const URL_BASE = `${API_URL}/api/v1/distribution`

export const skewnessData = (fileParams) => {
  const headers = {
    'accept': 'application/json', 
    'Content-Type': 'application/json'
  }
  return axios.post(`${URL_BASE}/skewness`, fileParams, {headers})
}

export const histogramData = (fileParams, histogramParams) => {
  const headers = {
    'accept': 'application/json', 
    'Content-Type': 'application/json'
  }
  return axios.post(`${URL_BASE}/histogram`, {...fileParams, ...histogramParams}, {headers})
}