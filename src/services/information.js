import axios from 'axios'

// const URL_BASE = 'http://localhost:8000/api/v1/general-information'
const URL_BASE = 'http://3.129.92.152:8000/api/v1/general-information'

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