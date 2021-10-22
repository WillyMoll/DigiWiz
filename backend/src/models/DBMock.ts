class DBMock {

    solutions: Solution[];
    companies: Company[];
    useCases: UseCase[];
    questions: Question[];


    constructor() {
        this.questions.push(new Question("M"));
    }

    getQuestions(): any {

    }

}
