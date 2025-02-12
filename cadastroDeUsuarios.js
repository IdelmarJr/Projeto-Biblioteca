const biblioteca = [];
const usuarios = [];

function adicionarLivro(titulo, autor) {
  const livro = { titulo, autor, disponivel: true };
  biblioteca.push(livro);
  console.log(`Livro "${titulo}" adicionado!`);
}

function listarLivros() {
  console.log("\nLista de Livros:");
  biblioteca.forEach((livro, index) => {
    const status = livro.disponivel ? "Disponível" : "Emprestado";
    console.log(`${index + 1}. ${livro.titulo} - ${livro.autor} (${status})`);
  });
}

function cadastrarUsuario(nome, email, telefone) {
  const usuario = { nome, email, telefone, livrosEmprestados: [] };
  usuarios.push(usuario);
  console.log(`Usuário "${nome}" cadastrado com sucesso!`);
}

function listarUsuarios() {
  console.log("\nLista de Usuários:");
  usuarios.forEach((usuario, index) => {
    console.log(`${index + 1}. ${usuario.nome} - ${usuario.email} - ${usuario.telefone}`);
  });
}

cadastrarUsuario("Ana", "ana@email.com", "11987654321");
cadastrarUsuario("Carlos", "carlos@email.com", "11912345678");
listarUsuarios();
adicionarLivro("O Hobbit", "J.R.R. Tolkien");
adicionarLivro("1984", "George Orwell");
listarLivros();
