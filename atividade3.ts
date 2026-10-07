class Estudante {
    private _nome: string = "";
    private _nota1: number = 0;
    private _nota2: number = 0;

    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(valor: string) {
        if (valor.trim() === "") {
            console.log("Erro: Nome invalido.");
            return;
        }
        this._nome = valor;
    }

    get nota1(): number {
        return this._nota1;
    }

    set nota1(valor: number) {
        if (valor < 0 || valor > 10) {
            console.log("Erro: a Nota 1 deve ser entre 0 ate o 10.");
            return;
        }
        this._nota1 = valor;
    }

    get nota2(): number {
        return this._nota2;
    }

    set nota2(valor: number) {
        if (valor < 0 || valor > 10) {
            console.log("Erro: a Nota 2 deve ser entre 0 até o 10.");
            return;
        }
        this._nota2 = valor;
    }

    calcularMedia(): number {
        return (this._nota1 + this._nota2) / 2;
    }

    verificarAprovacao(): string {
        return this.calcularMedia() >= 7 ? "Aprovado" : "Reprovado";
    }

    exibirDados() {
        console.log(`Estudante: ${this._nome} | Nota 1: ${this._nota1} | Nota 2: ${this._nota2} | Média: ${this.calcularMedia()} | Situação: ${this.verificarAprovacao()}`);
    }
}

const estudante = new Estudante("Carlos", 8, 6);
estudante.exibirDados();

estudante.nota1 = -5;
estudante.nota2 = 12;

estudante.nota1 = 9;
estudante.nota2 = 7;
estudante.exibirDados();