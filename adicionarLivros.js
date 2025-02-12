const biblioteca = []

function adicionarLivros(titulo, autor){
    const livro = {titulo, autor, disponivel: true}
    biblioteca.push(livro)
    console.log(`Livro "${titulo}" adicionado!`)
}

function listarLivros() {
    console.log('\nLista de Livros:')
    biblioteca.forEach((livro, index) => {
        const status = livro.disponivel ? "Disponível" : "Emprestado"
        console.log(`${index + 1}. ${livro.titulo} - ${livro.autor} (${status})`)
    })
}

function removerLivro(titulo){
    const index = biblioteca.findIndex((livro) => livro.titulo === titulo)
    if (index !== -1) {
        biblioteca.splice(index, 1)
        console.log(`Livro "${titulo}" removido!`)
    } else {
        console.log(`Livro "${titulo}" não encontrado!`)
    }
}

function emprestarLivro(titulo) {
    const livro = biblioteca.find((livro) => livro.titulo === titulo);
    if (livro) {
      if (livro.disponivel) {
        livro.disponivel = false;
        console.log(`Livro "${titulo}" emprestado com sucesso!`);
      } else {
        console.log(`Livro "${titulo}" já está emprestado.`);
      }
    } else {
      console.log(`Livro "${titulo}" não encontrado.`);
    }
  }
  
  function devolverLivro(titulo) {
    const livro = biblioteca.find((livro) => livro.titulo === titulo)
    if (livro) {
      if (!livro.disponivel) {
        livro.disponivel = true
        console.log(`Livro "${titulo}" devolvido com sucesso!`)
      } else {
        console.log(`Livro "${titulo}" já estava disponível.`)
      }
    } else {
      console.log(`Livro "${titulo}" não encontrado.`)
    }
  }



adicionarLivros('JS', 'Jesiel')
adicionarLivros('Java', 'Aislan')
adicionarLivros('C#', 'Rubens')
adicionarLivros('Kotlin', 'Joao Paulo')
listarLivros()
emprestarLivro('JS');
listarLivros();
devolverLivro('JS');
listarLivros();

