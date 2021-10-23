import {Question} from "./Question";
import {Solution} from "./Solution";

export class UseCase {

    id: number;
    description: string;
    solutions: Solution[];
    questions: Question[];

    constructor(id: number, description: string, solutions: Solution[], questions: Question[]) {
        this.id = id;
        this.solutions = solutions;
        this.description = description;
        this.questions = questions;
    }
}
