import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL
const URL_BASE = `${API_URL}/api/v1/general-information`

export const summaryData = (fileParams) => {
  const headers = {
    'accept': 'application/json', 
    'Content-Type': 'application/json'
  }
  return axios.post(`${URL_BASE}/summary`, fileParams, {headers})
}

export const attributesInfo = (fileParams) => {
  const headers = {
    'accept': 'application/json', 
    'Content-Type': 'application/json'
  }
  return axios.post(`${URL_BASE}/attributes`, fileParams, {headers})
}

export const previewData = (fileParams, n) => {
  const headers = {
    'accept': 'application/json', 
    'Content-Type': 'application/json'
  }
  return axios.post(`${URL_BASE}/preview`, {...fileParams, n}, {headers})
}

export const describeData = (fileParams) => {
  const headers = {
    'accept': 'application/json', 
    'Content-Type': 'application/json'
  }
  return axios.post(`${URL_BASE}/describe`, fileParams, {headers})
}