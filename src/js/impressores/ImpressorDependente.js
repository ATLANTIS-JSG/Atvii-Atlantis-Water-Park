"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const impressorEndereco_1 = __importDefault(require("./impressorEndereco"));
const impressorTelefones_1 = __importDefault(require("./impressorTelefones"));
const impressorDocumentos_1 = __importDefault(require("./impressorDocumentos"));
class ImpressaorDependente {
    constructor(cliente) {
        this.cliente = cliente;
    }
    imprimir() {
        let impressao = `****************************\n` +
            `| Nome: ${this.cliente.Nome}\n` +
            `| Nome social: ${this.cliente.NomeSocial}\n` +
            `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n` +
            `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`;
        this.impressor = new impressorEndereco_1.default(this.cliente.Endereco);
        impressao = impressao + `\n${this.impressor.imprimir()}`;
        this.impressor = new impressorDocumentos_1.default(this.cliente.Documentos);
        impressao = impressao + `\n${this.impressor.imprimir()}`;
        this.impressor = new impressorTelefones_1.default(this.cliente.Telefones);
        impressao = impressao + `\n${this.impressor.imprimir()}`;
        return impressao;
    }
}
exports.default = ImpressaorDependente;
