import axios from 'axios'

// const URL_BASE = 'http://localhost:8000/api/v1/file'
const URL_BASE = 'http://lb-edalab-1031131010.us-east-2.elb.amazonaws.com/api/v1/file'

export const uploadFile = (formData) => {
  const headers = {
    'Content-Type': 'multipart/form-data',
  }
  return axios.post(`${URL_BASE}/upload`, formData, {headers})
}