export class armario {
    // ATRIBUTOS
    private tinta: string;
    private madeira: string;
    private tranca: number;

    // CONSTRUTOR
    public constructor(_tinta: string, _madeira : string, _tranca: number) {
        this.tinta = _tinta;
        this.madeira = _madeira;
        this.tranca = _tranca;
    }

    // MÉTODOS GET E SET 
    public getTinta(): string {
        return this.tinta;
    }

    public setTinta(_tinta: string): void {
        this.tinta = _tinta;
    }

    public getMadeira(): string {
        return this.madeira;
    }

    public setMadeira(_madeira: string): void {
        this.madeira = _madeira;
    }

    public getTranca(): number {
        return this.tranca;
    }

    public setTranca(_tranca: number): void {
        this.tranca = _tranca;
    }

    public guardar(): void {
        console.log(` A tranca ${this.tranca} tem uma ótima qualidade.`);
    }
    public decorar(): void {
        console.log(` A madeira ${this.madeira} é muito bonita.`);
    }
}
