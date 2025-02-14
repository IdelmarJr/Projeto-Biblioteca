function devolucoes(usuarioNome, livroTitulo) {
    const emprestimo = emprestimos.find(
      (e) => e.usuario.nome === usuarioNome && e.livro.titulo === livroTitulo && !e.devolvido
    );
  
    if (!emprestimo) {
      console.log(`Empréstimo não encontrado.`);
      return;
    }
  
    const dataDevolucao = new Date();
    const dataEmprestimo = new Date(emprestimo.dataEmprestimo);
    const diasEmprestado = Math.ceil((dataDevolucao - dataEmprestimo) / (1000 * 60 * 60 * 24));
  
    let multa = 0;
    if (diasEmprestado > 7) {
      multa = (diasEmprestado - 7) * 1; // R$1 por dia atrasado
    }
  
    emprestimo.devolvido = true;
    emprestimo.dataDevolucao = dataDevolucao;
    emprestimo.multa = multa;
    emprestimo.livro.disponivel = true;
  
    console.log(`Livro "${livroTitulo}" devolvido por "${usuarioNome}" após ${diasEmprestado} dias.`);
    if (multa > 0) {
      console.log(`Multa por atraso: R$ ${multa},00`);
    } else {
      console.log(`Devolução dentro do prazo, sem multa.`);
    }
  }
  
  // Simula o atraso na devolução
  emprestimos[0].dataEmprestimo = new Date(new Date().setDate(new Date().getDate() - 10)); // 1
  
  // Teste
  devolucoes();
  