export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes += 1;
    }
    voteDown(): void {
        this.votes -= 1;
    }

    domain(): string {
        try {
            //const domainANdPath: string = this.link.split('//')[1];
            //return domainANdPath.split('/')[0];
            return this.link;
        } catch (err) {
            return null;
        }
    }
}