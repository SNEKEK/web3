import axios from "axios"

const baseUrl = "//localhost:3001/api/scores"

const getAll = () => axios.get(baseUrl).then(response => response.data)
const createOne = (score) => axios.post(baseUrl,score).then(response => response.data)

export default { getAll, createOne }