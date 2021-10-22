class UseCase {

    description: string;
    questions: Question[];

    constructor(description: string, questions: Question[]) {
        this.description = description;
        this.questions = questions;
    }
}
