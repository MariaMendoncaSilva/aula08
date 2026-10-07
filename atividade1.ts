import promptSync from 'prompt-sync';
const prompt = promptSync();

class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    sacar(valor: number) {
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`);
    }

    depositar(valor: number) {
        this.saldo += valor;
        console.log(`Depósito do valor de R$ ${valor} realizado. Saldo atual agora vai ser o : R$ ${this.saldo}`);
    }
}

const titular = prompt("Digite o nome do titular: ");
const saldoInicial = Number(prompt("Digite o saldo inicial: "));
const conta = new ContaBancaria(titular, saldoInicial);

const valorSaque = Number(prompt("Digite o valor do saque: "));
conta.sacar(valorSaque);

const valorDeposito = Number(prompt("Digite o valor do depósito: "));
conta.depositar(valorDeposito);