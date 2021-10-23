import {Question} from "./Question";

export class QuestionSet {
    id: string;
    name: string;
    questions: Question[]
    icon: string

    constructor(id: string, name: string, questions: Question[]) {
        this.id = id;
        this.name = name;
        this.questions = questions;
    }
}
