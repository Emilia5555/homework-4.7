import axios from "axios"

const BASE_URL = "localhost:3001/people/"
const apiConn = axios.create({baseURL: BASE_URL})

export default apiConn