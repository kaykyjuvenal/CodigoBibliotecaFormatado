import { Biblioteca } from "./Biblioteca";
import { Livro } from "./Livro";
import { Usuario } from "./Usuario";

const biblioteca = new Biblioteca();

const livro1 = new Livro("1984", "George Orwell", 1949);
const livro2 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
const livro3 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
const livro4 = new Livro("A Revolução dos Bichos", "George Orwell", 1945);

biblioteca.cadastrarLivro(livro1);
biblioteca.cadastrarLivro(livro2);
biblioteca.cadastrarLivro(livro3);
biblioteca.cadastrarLivro(livro4);

const usuario1 = new Usuario("Alice", 1);
const usuario2 = new Usuario("Bob", 2);

biblioteca.cadastrarUsuario(usuario1);
biblioteca.cadastrarUsuario(usuario2);

usuario1.emprestarLivro(livro1);
usuario1.emprestarLivro(livro3);
usuario1.devolverLivro(livro1);
usuario1.emprestarLivro(livro2);

usuario2.emprestarLivro(livro4);
usuario2.emprestarLivro(livro1);
usuario2.devolverLivro(livro4);
usuario2.emprestarLivro(livro3);