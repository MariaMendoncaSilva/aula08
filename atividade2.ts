class Produto {
    private _nome: string = "";
    private _preco: number = 0;
    private _estoque: number = 0;

    constructor(nome: string, preco: number, estoque: number) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(valor: string) {
        if (valor.trim() === "") {
            console.log("Erro: o Nome ta inválido.");
            return;
        }
        this._nome = valor;
    }

    get preco(): number {
        return this._preco;
    }

    set preco(valor: number) {
        if (valor < 0) {
            console.log("Erro: o Preço nãa pode ser negativo.");
            return;
        }
        this._preco = valor;
    }

    get estoque(): number {
        return this._estoque;
    }

    set estoque(valor: number) {
        if (valor < 0) {
            console.log("Erro: o Estoque não pode ser negativo.");
            return;
        }
        this._estoque = valor;
    }

    exibirDados() {
        console.log(`Produto: ${this._nome} | Preço: R$ ${this._preco} | Estoque: ${this._estoque}`);
    }
}

const produto = new Produto("Mouse", 50, 10);
produto.exibirDados();

produto.preco = -20;
produto.estoque = -5;

produto.preco = 45;
produto.estoque = 15;
produto.exibirDados();