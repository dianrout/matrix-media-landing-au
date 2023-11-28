import axios from "axios"

const BASE_API_URL = process.env.NEXT_PUBLIC_HOST_BASE_URL
const AUTH_PAGE = "/"

const $http = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-type": "application/json"
  }
})

export default $http
