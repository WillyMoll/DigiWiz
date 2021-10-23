import {api} from "../config/api";

export const ApiService = {
    getQuestions: () => api.get('/questions').then(r =>r.data),
    getQuestion: () => api.get('/questions').then(r => (r.data as any[])[Math.floor(Math.random() * (r.data as any[]).length)]), //TODO: type
    getUseCase: (id: string) => api.get(`/usecases/${id}`).then(r => r.data),
    getQuestionSets:() => api.get('/questionsets').then(r => r.data),
    getQuestionSet: (id: string): Promise<any[]> => api.get(`/questionsets/${id}`).then(r => r.data as any[]),
}