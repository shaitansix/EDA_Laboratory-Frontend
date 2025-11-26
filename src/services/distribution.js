import axios from 'axios'

// const URL_BASE = 'http://localhost:8000/api/v1/distribution'
const URL_BASE = 'http://lb-edalab-1031131010.us-east-2.elb.amazonaws.com/api/v1/distribution'

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