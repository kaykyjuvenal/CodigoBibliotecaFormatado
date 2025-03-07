export class Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    disponivel: boolean;

    constructor(titulo: string, autor: string, anoPublicacao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = true;
    }

    emprestar(): void {
        if (this.disponivel) {
            this.disponivel = false;
            console.log(`O livro "${this.titulo}" foi emprestado.`);
        } else {
            console.log(`O livro "${this.titulo}" não está disponível para empréstimo.`);
        }
    }

    devolver(): void {
        this.disponivel = true;
        console.log(`O livro "${this.titulo}" foi devolvido.`);
    }
}