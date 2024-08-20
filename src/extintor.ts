export class extintor {
    // ATRIBUTOS
    private mangueira: string;
    private classe: string;
    private valvula: number;

    // CONSTRUTOR
    public constructor(_mangueira: string, _classe : string, _valvula: number) {
        this.mangueira = _mangueira;
        this.classe = _classe;
        this.valvula = _valvula;
    }

    // MÉTODOS GET E SET 
    public getMangueria(): string {
        return this.mangueira;
    }

    public setMangueira(_mangueira: string): void {
        this.mangueira = _mangueira;
    }

    public getClasse(): string {
        return this.classe;
    }

    public setClasse(_classe: string): void {
        this.classe = _classe;
    }

    public getVlavula(): number {
        return this.valvula;
    }

    public setVlauvla(_valvula: number): void {
        this.valvula = _valvula;
    }

    public ativar(): void {
        console.log(` A válvula ${this.valvula} foi ativada.`);
    }
    public apagarFogo(): void {
        console.log(` A classe ${this.classe} é utilizada para apagar o fogo em casos específicos.`);
    }
}