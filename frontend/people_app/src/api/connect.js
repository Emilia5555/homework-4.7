import axios from "axios"

const BASE_URL = "https://backend-for-my-animal-lovers-application.onrender.com"
const apiConn = axios.create({baseURL: BASE_URL})

export default apiConn