export class casaco {
    // ATRIBUTOS
    private cor: string;
    private tecido: string;
    private comprimento: number;

    // CONSTRUTOR
    public constructor(_cor: string, _tecido : string, _comprimento: number) {
        this.cor = _cor;
        this.tecido = _tecido;
        this.comprimento = _comprimento;
    }

    // MÉTODOS GET E SET 
    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getTecido(): string {
        return this.tecido;
    }

    public setTecido(_tecido: string): void {
        this.tecido = _tecido;
    }

    public getComprimento(): number {
        return this.comprimento;
    }

    public setComprimento(_comprimento: number): void {
        this.comprimento = _comprimento;
    }

    public aquecer(): void {
        console.log(` O tecido ${this.tecido} aquece muito.`);
    }
    public vestir(): void {
        console.log(` O comprimento ${this.comprimento} não está confortável para vestir.`);
    }
}