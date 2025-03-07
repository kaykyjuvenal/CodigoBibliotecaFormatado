class Livro {
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

class Usuario {
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

class Biblioteca {
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

// Exemplo de uso:
const biblioteca = new Biblioteca();

const livro1 = new Livro("1984", "George Orwell", 1949);
const livro2 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);

biblioteca.cadastrarLivro(livro1);
biblioteca.cadastrarLivro(livro2);

const usuario1 = new Usuario("Alice", 1);
biblioteca.cadastrarUsuario(usuario1);

usuario1.emprestarLivro(livro1);
usuario1.devolverLivro(livro1);
usuario1.emprestarLivro(livro2);
