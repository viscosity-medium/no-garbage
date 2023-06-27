import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:4142/server-api',
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    }
});

export const axiosMultipartInstance = axios.create({
    baseURL: 'http://localhost:4142/server-api',
    headers:
        {
            "Content-type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        }
});

export const axiosStreamInstance = axios.create({
    baseURL: 'http://localhost:4142/server-api',
    headers:
        {
            "Content-type": "application/octet-stream",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        }
});
