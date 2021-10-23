import {Company} from "./Company";
import {UseCase} from "./UseCase";

export class Solution {

    id: number;
    website: string;
    description: string;
    company: Company;
    useCases: UseCase[];

    constructor(id: number, website: string, description: string, company: Company, useCases: UseCase[]) {
        this.id = id;
        this.website = website;
        this.description = description;
        this.company = company;
        this.useCases = useCases;
    }
}
