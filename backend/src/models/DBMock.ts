class DBMock {

    solutions: Solution[];
    useCases: UseCase[];


    constructor() {

        let banking = new Question(1, "Verwenden sie online Banking?");
        let buchhaltung = new Question(2, "Machen sie ihre Buchhaltung auf Papier?");
        let chat = new Question(3, "Verwenden sie ein Firmeninternes Nachrichten-Programm?");
        let planung = new Question(4, "Verwenden sie Ein Programm zur Arbeitsplanung?");

        this.useCases.push(new UseCase(1, "Online Banking", [], [banking]));
        this.useCases.push(new UseCase(2, "Buchhaltung", [], [buchhaltung]));
        this.useCases.push(new UseCase(3, "Projektverwaltung", [], [chat, planung]));
        this.useCases.push(new UseCase(4, "Chat-Programm", [], [chat]));

        let zkb = new Company(1, "https://www.zkb.ch", "Die Möglichkeit Rechnungen vom Computer aus zu bezahlen mit zkb");
        let ubs = new Company(2, "https://www.ubs.ch", "Die Möglichkeit Rechnungen vom Computer aus zu bezahlen mit ubs");
        let bexio = new Company(3, "https://www.bexio.com/de-CH/buchhaltungsprogramm", "Alles, was Sie benötigen, in einer intuitiven Software für KMU");
        let trello = new Company(4, "https://trello.com", "Trello helps teams move work forward");
        let zoho = new Company(5, "https://www.zoho.com", "The best project management software for any business");
        let slack = new Company(6, "https://slack.com/intl/de-ch", "Slack ist die Zukunft der Arbeit");

        this.solutions.push(new Solution(1, "https://www.zkb.ch/de/private/digitales-banking/ebanking.html", "Mit eBanking erledigen Sie Ihre Bankgeschäfte jederzeit am Computer. Von zu Hause oder dort, wo Sie gerade online sind. Ob Zahlungen erledigen, Börsenaufträge tätigen oder einen Dauerauftrag ändern: eBanking ist einfach, bequem und sicher.", zkb, []));
        this.solutions.push(new Solution(2, "https://ebanking-ch4.ubs.com/workbench/WorkbenchOpenAction.do?login&", "Wir bieten Ihnen für jedes Bedürfnis die passende Banklösung. Egal, ob es dabei um Konten und Karten, ein Eigenheim, Vorsorge oder eine Geldanlage geht.", ubs, []));
        this.solutions.push(new Solution(3, "https://www.bexio.com/en-CH/product-overview", "Print invoices directly or send them the convenient, electronic way. The orange payment slip makes bank reconciliation a breeze. That means you get paid faster. Incoming bills from suppliers you simply scan and post. Simple dashboards allow you to keep track of incoming and outgoing payments.", bexio, []));
        this.solutions.push(new Solution(4, "https://trello.com/en/pricing", "Trusted by millions, Trello powers teams all around the world. Explore which option is right for you.", trello, []));
        this.solutions.push(new Solution(5, "https://www.zoho.com/projects", "The best project management software for any business", zoho, []));
        this.solutions.push(new Solution(6, "https://slack.com/intl/de-ch", "Slack ist die Zukunft der Arbeit", slack, []));

    }

    getQuestions(): any {
        return this.solutions;
    }

    getUseCases(): any {
        return this.useCases;
    }

}
