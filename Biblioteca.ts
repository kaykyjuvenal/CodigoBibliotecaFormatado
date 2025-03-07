import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

export class Biblioteca {
    livros: Livro[];
    usuarios: Usuario[];

    constructor() {
        this.livros = [];
        this.usuarios = [];
    }

    cadastrarLivro(livro: Livro): void {
        this.livros.push(livro);
        console.log(`O livro "${livro.titulo}" foi cadastrado na biblioteca.`);
    }

    cadastrarUsuario(usuario: Usuario): void {
        this.usuarios.push(usuario);
        console.log(`O usuário "${usuario.nome}" foi cadastrado na biblioteca.`);
    }
}