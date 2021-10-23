import axios from "axios";

export const api = axios.create({
    baseURL: 'https://digiwiz-backend.herokuapp.com'
})