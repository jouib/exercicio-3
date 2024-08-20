export class lampada {
    // ATRIBUTOS
    private vidro: string;
    private potencia: number;
    private tamanho: string;

    // CONSTRUTOR
    public constructor(_vidro: string, _potencia : number, _tamanho: string) {
        this.vidro = _vidro;
        this.potencia = _potencia;
        this.tamanho = _tamanho;
    }

    // MÉTODOS GET E SET 
    public getVidro(): string {
        return this.vidro;
    }

    public setVidro(_vidro: string): void {
        this.vidro = _vidro;
    }

    public getPotencia(): number {
        return this.potencia;
    }

    public setPotencia(_potencia: number): void {
        this.potencia = _potencia;
    }

    public getTamanho(): string {
        return this.tamanho;
    }

    public setTamanho(_tamanho: string): void {
        this.tamanho = _tamanho;
    }

    public iluminar(): void {
        console.log(` O tamanho ${this.tamanho} ilumina melhor o ambiente.`);
    }
    public sinalizar(): void {
        console.log(` A potência ${this.potencia} ajuda a sinalizar.`);
    }
}