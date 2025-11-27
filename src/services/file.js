import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL
const URL_BASE = `${API_URL}/api/v1/file`

export const uploadFile = (formData) => {
  const headers = {
    'Content-Type': 'multipart/form-data',
  }
  return axios.post(`${URL_BASE}/upload`, formData, {headers})
}