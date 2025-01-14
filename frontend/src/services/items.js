import axios from 'axios'

const baseUrl = '/api/list'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  axios.delete(`${baseUrl}/${id}`)
}

const clearList = () => {
  axios.delete(`/api/clear`)
}

const api = { getAll, create, update, remove, clearList }

export default api