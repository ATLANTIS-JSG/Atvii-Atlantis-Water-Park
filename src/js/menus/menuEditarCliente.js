"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MenuEditarCliente {
    mostrar() {
        console.clear();
        console.log(`****************************`);
        console.log(`| Editar: `);
        console.log(`----------------------`);
        console.log(`| 1 - Nome`);
        console.log(`| 2 - Nome social`);
        console.log(`| 3 - Data de nascimento`);
        console.log(`| 4 - Telefones`);
        console.log(`| 5 - Endereço`);
        console.log(`| 6 - Documentos`);
        console.log(`----------------------`);
        console.log(`| Adicionar? `);
        console.log(`----------------------`);
        console.log(`| 7 - Telefones`);
        console.log(`| 8 - Documentos`);
        console.log(`----------------------`);
        console.log(`| 0 - Sair`);
        console.log(`----------------------`);
    }
}
exports.default = MenuEditarCliente;