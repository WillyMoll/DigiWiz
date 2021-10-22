class Solution {

    website: string;
    description: string;
    company: Company;
    useCases: UseCase[];

    constructor(website: string, description: string, company: Company, useCases: UseCase[]) {
        this.website = website;
        this.description = description;
        this.company = company;
        this.useCases = useCases;
    }
}
