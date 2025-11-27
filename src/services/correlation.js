import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL
const URL_BASE = `${API_URL}/api/v1/correlation`

export const correlationMatrix = (fileParams) => {
  const headers = {
    'accept': 'application/json', 
    'Content-Type': 'application/json'
  }
  return axios.post(`${URL_BASE}/matrix`, fileParams, {headers})
}

export const dispersionData = (fileParams, dispersionParams) => {
  const headers = {
    'accept': 'application/json', 
    'Content-Type': 'application/json'
  }
  return axios.post(`${URL_BASE}/dispersion`, {...fileParams, ...dispersionParams}, {headers})
}