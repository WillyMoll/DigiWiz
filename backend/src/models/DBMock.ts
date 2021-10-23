import {Solution} from "./Solution";
import {UseCase} from "./UseCase";
import {Question} from "./Question";
import {Company} from "./Company";
import {QuestionSet} from "./QuestionSet";

export class DBMock {

    solutions: Solution[];
    useCases: UseCase[];
    questions: Question[];
    questionSets: QuestionSet[];
    companies: Company[];

    constructor() {

        let zkb = new Company(1, "https://www.zkb.ch", "Die Möglichkeit, Rechnungen vom Computer aus zu bezahlen mit ZKB");
        let ubs = new Company(2, "https://www.ubs.ch", "Die Möglichkeit, Rechnungen vom Computer aus zu bezahlen mit UBS");
        let bexio = new Company(3, "https://www.bexio.com/de-CH/buchhaltungsprogramm", "Alles, was Sie benötigen, in einer intuitiven Software für KMU");
        let trello = new Company(4, "https://trello.com", "Trello helps teams move work forward");
        let zoho = new Company(5, "https://www.zoho.com", "The best project management software for any business");
        let slack = new Company(6, "https://slack.com/intl/de-ch", "Slack ist die Zukunft der Arbeit");
        this.companies = [zkb, ubs, bexio, trello, zoho, slack];

        let zkbSolution = new Solution(1, "https://www.zkb.ch/de/private/digitales-banking/ebanking.html", "http://lh3.ggpht.com/ZTGMXcpun2d53PFqKKJVLB3mQiBB4lNmGCyhxtAn6LXJ-k_RBo242f0e7BUMZ4zW3aQ7", "Mit eBanking erledigen Sie Ihre Bankgeschäfte jederzeit am Computer. Von zu Hause oder dort, wo Sie gerade online sind. Ob Zahlungen erledigen, Börsenaufträge tätigen oder einen Dauerauftrag ändern: eBanking ist einfach, bequem und sicher.", zkb, []);
        let ubsSolution = new Solution(2, "https://ebanking-ch4.ubs.com/workbench/WorkbenchOpenAction.do?login&", "https://upload.wikimedia.org/wikipedia/de/thumb/a/a0/UBS_Logo_SVG.svg/1200px-UBS_Logo_SVG.svg.png", "Wir bieten Ihnen für jedes Bedürfnis die passende Banklösung. Egal, ob es dabei um Konten und Karten, ein Eigenheim, Vorsorge oder eine Geldanlage geht.", ubs, []);
        let bexioSolution = new Solution(3, "https://www.bexio.com/en-CH/product-overview", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nUtEb-JHHR9BLAXKOOXB2tuRAieFh-2atP3x1PQgl0MXCaE0H3_6BW1lCDdudWFOPZ0&usqp=CAU", "Print invoices directly or send them the convenient, electronic way. The orange payment slip makes bank reconciliation a breeze. That means you get paid faster. Incoming bills from suppliers you simply scan and post. Simple dashboards allow you to keep track of incoming and outgoing payments.", bexio, []);
        let trelloSolution = new Solution(4, "https://trello.com/en/pricing", "https://ct-academy.ch/wp-content/uploads/2020/03/trello-logo-blue-996x306.png", "Trusted by millions, Trello powers teams all around the world. Explore which option is right for you.", trello, []);
        let zohoSolution = new Solution(5, "https://www.zoho.com/projects", "https://www.zoho.com/one/images/zoho-one@2x.png", "The best project management software for any business", zoho, []);
        let slackSolution = new Solution(6, "https://slack.com/intl/de-ch", "https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/business/app-integrations/slack/Slack_logo_new.png", "Slack ist die Zukunft der Arbeit", slack, []);
        this.solutions = [zkbSolution, ubsSolution, bexioSolution, trelloSolution, zohoSolution, slackSolution];

        let banking = new Question(1, "Verwenden sie online Banking?");
        let buchhaltung = new Question(2, "Machen sie ihre Buchhaltung auf Papier?");
        let chat = new Question(3, "Verwenden sie ein Firmeninternes Nachrichten-Programm?");
        let planung = new Question(4, "Verwenden sie Ein Programm zur Arbeitsplanung?");
        this.questions = [banking, buchhaltung, chat, planung];

        this.useCases = [];
        this.useCases.push(new UseCase(1, "Online Banking", [zkbSolution, ubsSolution], [banking]));
        this.useCases.push(new UseCase(2, "Buchhaltung", [bexioSolution], [buchhaltung]));
        this.useCases.push(new UseCase(3, "Projektverwaltung", [trelloSolution, zohoSolution], [chat, planung]));
        this.useCases.push(new UseCase(4, "Chat-Programm", [slackSolution], [chat]));

        this.questionSets = [
            {
                name: "Beispiel 1",
                id: "1",
                questions: [banking, buchhaltung, chat],
                icon: 'https://cdn0.iconfinder.com/data/icons/shopping-set-3/512/e7-512.png',
            },
            {
                name: "Beispiel 2",
                id: "2",
                questions: [chat, planung, banking],
                icon: 'https://cdn0.iconfinder.com/data/icons/shopping-set-3/512/e7-512.png',
            },
        ]

    }

    getQuestions(): any {
        return this.questions;
    }

    getQuestionSets(): any {
        return this.questionSets;
    }

    getQuestionSet(id: string): any {
        return this.questionSets.find(s => s.id == id);
    }

    getUseCases(): any {
        return this.useCases;
    }

    getSolutions(): any {
        return this.solutions;
    }

    getCompanies(): any {
        return this.companies;
    }

    getSolutionsByIDs(questionIds: number[]) {
        let solutions = [];
        for (let id of questionIds) {
            for (let useCase of this.useCases) {
                for (let question of useCase.questions) {
                    if (question.id === id) {
                        solutions = solutions.concat(useCase.solutions);
                    }
                }
            }
        }
        return solutions;
    }
}
