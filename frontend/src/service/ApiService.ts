import {api} from "../config/api";

export const ApiService = {
    getQuestion: () => api.get('/questions').then(r => r.data) //TODO: type
}