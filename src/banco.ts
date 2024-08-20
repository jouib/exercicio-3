export class banco {

    // ATRIBUTOS
    private material: string;
    private formato: string;
    private cor: string;

    // CONSTRUTOR
    public constructor(_material: string, _formato : string, _cor: string) {
        this.material = _material;
        this.formato = _formato;
        this.cor = _cor;
    }

    // MÉTODOS GET E SET 
    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material;
    }

    public getFormato(): string {
        return this.cor;
    }

    public setFormato(_formato: string): void {
        this.formato = _formato;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public sentar(): void {
        console.log(` O material ${this.material} desse banco é muito bom.`);
    }
    public deitar(): void {
        console.log(` O banco possui um formato ${this.formato}, e é ótima para deitar.`);
    }
}