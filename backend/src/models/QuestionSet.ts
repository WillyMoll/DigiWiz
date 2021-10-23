import {Question} from "./Question";

export class QuestionSet {
    id: number;
    name: string;
    questions: Question[];
    icon: string;

    constructor(id: number, name: string, questions: Question[], icon: string) {
        this.id = id;
        this.name = name;
        this.questions = questions;
        this.icon = icon;
    }
}
