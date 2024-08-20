export class escada {
    // ATRIBUTOS
    private material: string;
    private altura: number;
    private marca: string;

    // CONSTRUTOR
    public constructor(_material: string, _altura : number, _marca: string) {
        this.material = _material;
        this.altura = _altura;
        this.marca = _marca;
    }

    // MÉTODOS GET E SET 
    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material;
    }

    public getAltura(): number {
        return this.altura;
    }

    public setAltura(_altura: number): void {
        this.altura = _altura;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public subir(): void {
        console.log(` A altura ${this.altura} ajuda a subir mais alto.`);
    }
    public elevar(): void {
        console.log(` O material ${this.material} deve ser resistente para elevar pessoas e materiais.`);
    }
}