import axios from 'axios'

const token = import.meta.env.VITE_REACT_APP_API_TOKEN
const url = import.meta.env.VITE_REACT_APP_API_URL

export const makeRequest = axios.create({
    baseURL: url,
    headers: {
        Authorization: "bearer " + token
    }
})