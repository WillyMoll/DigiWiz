import {Question} from "./Question";
import {Solution} from "./Solution";

export class UseCase {

    id: number;
    name: string;
    description: string;
    solutions: Solution[];
    questions: Question[];

    constructor(id: number, name: string, description: string, solutions: Solution[], questions: Question[]) {
        this.id = id;
        this.name = name;
        this.solutions = solutions;
        this.description = description;
        this.questions = questions;
    }
}
