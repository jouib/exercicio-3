export class lixeira {
    // ATRIBUTOS
    private material: string;
    private capacidade: number;
    private cor: string;

    // CONSTRUTOR
    public constructor(_material: string, _capacidade : number, _cor: string) {
        this.material = _material;
        this.capacidade = _capacidade;
        this.cor = _cor;
    }

    // MÉTODOS GET E SET 
    public getMateiral(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material;
    }

    public getCapacidade(): number {
        return this.capacidade;
    }

    public setCpacidade(_capacidade: number): void {
        this.capacidade = _capacidade;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public jogarFora(): void {
        console.log(` A lixeira possui capacidade de ${this.capacidade} para jogar mais lixo fora.`);
    }
    public reciclar(): void {
        console.log(` A cor ${this.cor} serve para reciclar um tipo específico de material.`);
    }
}