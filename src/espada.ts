export class escada {
    // ATRIBUTOS
    private material: string;
    private tamanho: string;
    private design: string;

    // CONSTRUTOR
    public constructor(_material: string, _tamanho : string, _design: string) {
        this.material = _material;
        this.tamanho = _tamanho;
        this.design = _design;
    }

    // MÉTODOS GET E SET 
    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material;
    }

    public getTamanho(): string {
        return this.tamanho;
    }

    public setTamanho(_tamanho: string): void {
        this.tamanho = _tamanho;
    }

    public getDesign(): string {
        return this.design;
    }

    public setDesign(_design: string): void {
        this.design = _design;
    }

    public cortar(): void {
        console.log(` O tamanho ${this.tamanho} ajuda a cortar os alimentos com maior facilidade.`);
    }
    public atacar(): void {
        console.log(` O design ${this.design}, é feito para atacar em casos de autodefesa.`);
    }
}