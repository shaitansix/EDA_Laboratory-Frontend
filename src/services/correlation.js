import axios from 'axios'

// const URL_BASE = 'http://localhost:8000/api/v1/correlation'
const URL_BASE = 'http://lb-edalab-1031131010.us-east-2.elb.amazonaws.com/api/v1/correlation'

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