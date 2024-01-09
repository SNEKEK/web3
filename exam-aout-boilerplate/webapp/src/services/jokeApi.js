import axios from "axios"

const baseUrl = "//localhost:3001/api/jokes"

const getAll = () => axios.get(baseUrl).then(response => response.data)

export default { getAll }