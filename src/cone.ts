export class cone {
    // ATRIBUTOS
    private formato: string;
    private pigmento: string;
    private material: string;

    // CONSTRUTOR
    public constructor(_formato: string, _pigmento : string, _material: string) {
        this.formato = _formato;
        this.pigmento = _pigmento;
        this.material = _material;
    }

    // MÉTODOS GET E SET 
    public getFormato(): string {
        return this.formato;
    }

    public setFormato(_formato: string): void {
        this.formato = _formato;
    }

    public getPigmento(): string {
        return this.pigmento;
    }

    public setPigmento(_pigmento: string): void {
        this.pigmento = _pigmento;
    }

    public getMaterial(): string {
        return this.material;
    }

    public setCor(_material: string): void {
        this.material = _material;
    }

    public sinalizar(): void {
        console.log(` O material ${this.material} tem uma ótima qualidade e ajuda a sinalizar.`);
    }
    public controlarTrafego(): void {
        console.log(` O pigmento ${this.pigmento} é vibrante e ajuda a controlar o tráfego.`);
    }
}