"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MenuEditarClientes {
    mostrar() {
        console.clear();
        console.log(`****************************`);
        console.log(`| Qual o tipo do cliente para editar? `);
        console.log(`----------------------`);
        console.log(`| 1 - Editar Titular`);
        console.log(`| 2 - Editar Dependente`);
        console.log(`----------------------`);
        console.log(`| 0 - Sair`);
        console.log(`----------------------`);
    }
}
exports.default = MenuEditarClientes;
