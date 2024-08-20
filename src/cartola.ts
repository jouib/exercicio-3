export class cartola {
    // ATRIBUTOS
    private decoracao: string;
    private tamanho: number;
    private material: string;

    // CONSTRUTOR
    public constructor(_decoracao: string, _tamanho : number, _material: string) {
        this.decoracao = _decoracao;
        this.tamanho = _tamanho;
        this.material = _material;
    }

    // MÉTODOS GET E SET 
    public getDecoracao(): string {
        return this.decoracao;
    }

    public setDecoracao(_decoracao: string): void {
        this.decoracao = _decoracao;
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material;
    }

    public vestir(): void {
        console.log(`  O tamanho ${this.tamanho} está ajustado.`);
    }
    public enfeitar(): void {
        console.log(`É possível enfeitar a cartola com a ${this.decoracao}.`);
    }
}