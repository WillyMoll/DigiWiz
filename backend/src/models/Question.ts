export class Question {

    id: number;
    description: string;
    invert: boolean;

    constructor(id: number, description: string, invert: boolean = false) {
        this.id = id;
        this.description = description;
        this.invert = invert;
    }
}
