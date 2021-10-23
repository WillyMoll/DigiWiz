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

        let zkbSolution = new Solution(1, "ZKB", "https://www.zkb.ch/de/private/digitales-banking/ebanking.html", "https://unternehmerzeitung.ch/fileadmin/_processed_/5/c/csm_ZKB_Logo_RGB_1920x1080_bearbeitet_87c6e959cb.jpg", "Mit eBanking erledigen Sie Ihre Bankgeschäfte jederzeit am Computer. Von zu Hause oder dort, wo Sie gerade online sind. Ob Zahlungen erledigen, Börsenaufträge tätigen oder einen Dauerauftrag ändern: eBanking ist einfach, bequem und sicher.", zkb, []);
        let ubsSolution = new Solution(2, "UBS", "https://ebanking-ch4.ubs.com/workbench/WorkbenchOpenAction.do?login&", "https://upload.wikimedia.org/wikipedia/de/thumb/a/a0/UBS_Logo_SVG.svg/1200px-UBS_Logo_SVG.svg.png", "Wir bieten Ihnen für jedes Bedürfnis die passende Banklösung. Egal, ob es dabei um Konten und Karten, ein Eigenheim, Vorsorge oder eine Geldanlage geht.", ubs, []);
        let bexioSolution = new Solution(3, "Bexio", "https://www.bexio.com/en-CH/product-overview", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5nUtEb-JHHR9BLAXKOOXB2tuRAieFh-2atP3x1PQgl0MXCaE0H3_6BW1lCDdudWFOPZ0&usqp=CAU", "Print invoices directly or send them the convenient, electronic way. The orange payment slip makes bank reconciliation a breeze. That means you get paid faster. Incoming bills from suppliers you simply scan and post. Simple dashboards allow you to keep track of incoming and outgoing payments.", bexio, []);
        let trelloSolution = new Solution(4, "Trello", "https://trello.com/en/pricing", "https://ct-academy.ch/wp-content/uploads/2020/03/trello-logo-blue-996x306.png", "Trusted by millions, Trello powers teams all around the world. Explore which option is right for you.", trello, []);
        let zohoSolution = new Solution(5, "Zoho", "https://www.zoho.com/projects", "https://www.zoho.com/one/images/zoho-one@2x.png", "The best project management software for any business", zoho, []);
        let slackSolution = new Solution(6, "Slack", "https://slack.com/intl/de-ch", "https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/business/app-integrations/slack/Slack_logo_new.png", "Slack ist die Zukunft der Arbeit", slack, []);
        let redmineSolution = new Solution(7, "Redmine", "https://www.redmine.org/", "https://sanbo-app.s3.amazonaws.com/uploads/service/logo/17/redmine_logo.png", "Redmine is a flexible project management web application. Written using the Ruby on Rails framework, it is cross-platform and cross-database.", null, []);
        let jiraSolution = new Solution(8, "Jira", "https://www.atlassian.com/de/software/jira", "https://cdn.freelogovectors.net/wp-content/uploads/2018/05/jira-software_logo.png", "Jira Software wurde entwickelt, um allen Mitgliedern deines Softwareteams das Planen, Verfolgen und Releasen großartiger Software zu ermöglichen.", null, []);
        this.solutions = [zkbSolution, ubsSolution, bexioSolution, trelloSolution, zohoSolution, slackSolution, redmineSolution, jiraSolution];

        let banking = new Question(1, "Verwenden sie online Banking?", true);
        let buchhaltung = new Question(2, "Machen sie ihre Buchhaltung auf Papier?");
        let chat = new Question(3, "Verwenden sie ein Firmeninternes Nachrichten-Programm?", true);
        let planung = new Question(4, "Verwenden sie Ein Programm zur Arbeitsplanung?", true);
        this.questions = [banking, buchhaltung, chat, planung];

        this.useCases = [];
        this.useCases.push(new UseCase(1, "Online Banking", "Online Banking", [zkbSolution, ubsSolution], [banking]));
        this.useCases.push(new UseCase(2, "Buchhaltung", "Buchhaltung", [bexioSolution], [buchhaltung]));
        this.useCases.push(new UseCase(3, "Projektverwaltung", "Projektverwaltung", [trelloSolution, zohoSolution, redmineSolution, jiraSolution], [chat, planung]));
        this.useCases.push(new UseCase(4, "Chat-Programm", "Chat-Programm", [slackSolution], [chat]));

        this.questionSets = [
            new QuestionSet(1, "Handwerker", [banking, buchhaltung, chat], "data:image/jpeg;base64,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"),
            new QuestionSet(2, "Gastronomie", [banking, planung, chat], "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.BcQyLWm4ks6lY1QAbbU_yAHaE8%26pid%3DApi&f=1"),
            new QuestionSet(3, "Detailhandel", [banking, planung, chat], "https://www.toponline.ch/fileadmin/user_upload/Detailhandel.jpg"),
            new QuestionSet(4, "Produktionsunternehmen", [banking, planung, chat], "https://www.it-daily.net/images/Aufmacherbilder/Smart_Factory_686654287-500.jpg"),
            new QuestionSet(5, "Bauunternehmen", [banking, planung, chat], "https://img.fotocommunity.com/kranen-soweit-das-auge-reicht-29f8543d-4c4b-476c-a86d-a57a46d34d2d.jpg?width=1000"),
            new QuestionSet(6, "Finanzen", [banking, buchhaltung, chat], "https://images.moneycontrol.com/static-mcnews/2021/03/business-stocks_shutterstock_1402151111-1-770x433.jpg?impolicy=website&width=770&height=431"),
            new QuestionSet(7, "IT", [banking, planung, chat, buchhaltung], "https://i.pinimg.com/originals/a2/05/33/a20533e44206f047b96fbca012a2a769.jpg"),
        ]
    }

    getQuestions(): any {
        return this.questions;
    }

    getQuestionSets(): any {
        return this.questionSets;
    }

    getQuestionSet(id: string): any {
        // @ts-ignore
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

    getUseCasesByIDs(questionIds: number[]) {
        return this.useCases.filter(u => questionIds.indexOf(u.id) > -1 && u.questions.find(q => q.id === u.id))
    }

    getUseCase(id: string) {
        return this.getUseCases().filter(u => u.id == id);
    }

    getSolution(id: string) {
        // @ts-ignore
        return this.solutions.find(s => s.id == id);
    }
}
