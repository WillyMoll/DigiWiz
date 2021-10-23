import {api} from "../config/api";

export const ApiService = {
    getQuestions: () => api.get('/questions').then(r =>r.data),
    getQuestion: () => api.get('/questions').then(r => (r.data as any[])[Math.floor(Math.random() * (r.data as any[]).length)]), //TODO: type
    getUseCase: (usecase: string) => api.get(`/usecase/${usecase}`).then(r => r.data)
}