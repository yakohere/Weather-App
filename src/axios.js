import axios from "axios"

export const api = axios.create({
    baseURL: "https://api.openweathermap.org",
    params: {
        appid: "27a4c0923d04f24485fda86b54dc6c52",
        units: "metric"
    }
})