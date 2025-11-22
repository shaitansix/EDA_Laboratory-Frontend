import axios from 'axios'

const URL_BASE = 'http://localhost:8000/api/v1/file'

export const uploadFile = (formData) => {
  const headers = {
    'Content-Type': 'multipart/form-data',
  }
  return axios.post(`${URL_BASE}/upload`, formData, {headers})
}