import { Livro } from "./Livro";

export class Usuario {
    nome: string;
    id: number;
    livrosEmprestados: Livro[];

    constructor(nome: string, id: number) {
        this.nome = nome;
        this.id = id;
        this.livrosEmprestados = [];
    }

    emprestarLivro(livro: Livro): void {
        if (livro.disponivel) {
            livro.emprestar();
            this.livrosEmprestados.push(livro);
            console.log(`${this.nome} pegou emprestado o livro "${livro.titulo}".`);
        } else {
            console.log(`O livro "${livro.titulo}" já está emprestado.`);
        }
    }

    devolverLivro(livro: Livro): void {
        const index = this.livrosEmprestados.indexOf(livro);
        if (index !== -1) {
            livro.devolver();
            this.livrosEmprestados.splice(index, 1);
            console.log(`${this.nome} devolveu o livro "${livro.titulo}".`);
        } else {
            console.log(`${this.nome} não possui o livro "${livro.titulo}" emprestado.`);
        }
    }
}
