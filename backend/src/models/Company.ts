export class Company {

    id: number;
    website: string;
    description: string;

    constructor(id: number, website: string, description: string) {
        this.id = id;
        this.website = website;
        this.description = description;
    }
}
