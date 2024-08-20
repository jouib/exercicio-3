export class oculos {
    // ATRIBUTOS
    private ferro: string;
    private tranca: number;
    private grade: string;

    // CONSTRUTOR
    public constructor(_ferro: string, _tranca : number, _grade: string) {
        this.ferro = _ferro;
        this.tranca = _tranca;
        this.grade = _grade;
    }

    // MÉTODOS GET E SET 
    public getFerro(): string {
        return this.ferro;
    }

    public setFerro(_ferro: string): void {
        this.ferro = _ferro;
    }

    public getTranca(): number {
        return this.tranca;
    }

    public setTranca(_tranca: number): void {
        this.tranca = _tranca;
    }

    public getGrade(): string {
        return this.grade;
    }

    public setGrade(_grade: string): void {
        this.grade = _grade;
    }

    public abrir(): void {
        console.log(` O material ${this.ferro} desse portão dificulta a sua abertura.`);
    }
    public trancar(): void {
        console.log(` A tranca ${this.tranca} tranca o portão, trazendo segurança.`);
    }
}