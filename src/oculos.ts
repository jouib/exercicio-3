export class oculos {
    // ATRIBUTOS
    private lente: string;
    private armacao: string;
    private cor: string;

    // CONSTRUTOR
    public constructor(_lente: string, _armacao : string, _cor: string) {
        this.lente = _lente;
        this.armacao = _armacao;
        this.cor = _cor;
    }

    // MÉTODOS GET E SET 
    public getLente(): string {
        return this.lente;
    }

    public setLente(_lente: string): void {
        this.lente = _lente;
    }

    public getArmacao(): string {
        return this.armacao;
    }

    public setArmacao(_armacao: string): void {
        this.armacao = _armacao;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public proteger(): void {
        console.log(` A armaçao ${this.armacao} tem uma maior proteção contra a luz azul.`);
    }
    public enxergar(): void {
        console.log(` A lente ${this.lente} ajuda a enxergar.`);
    }
}