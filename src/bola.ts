export class bicicleta {
    // ATRIBUTOS
    private cor: string;
    private tamanho: number;
    private formato: string;

    // CONSTRUTOR
    public constructor(_cor: string, _tamanho : number, _formato: string) {
        this.cor = _cor;
        this.tamanho = _tamanho;
        this.formato = _formato;
    }

    // MÉTODOS GET E SET 
    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getFormato(): string {
        return this.formato;
    }

    public setFormato(_formato: string): void {
        this.formato = _formato;
    }

    public chutar(): void {
        console.log(` O formato ${this.formato} da bola é bom para chutar.`);
    }
    public cabecear(): void {
        console.log(` O tamanho ${this.tamanho} da bicicleta é ruim para cabecear.`);
    }
}