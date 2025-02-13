const biblioteca = [];
const usuarios = [];
const livrosEmprestados = [];
//Menu de opções
menu:
while (true){
    const menu = `
    Selecione uma das opções:
    1 - Cadastrar livro:
    2 - Exibir lista de livros:
    3 - Cadrastrar Usuário:
    4 - Exibir lista de Usuários:
    5 - Realizar empréstimos de livros:
    6 - Registrar devoluções de livros:
    7 - Calcular multas por atraso na devolução:
    8 - Exibir relatórios:
    0 - Sair.
    : `;
    const opcao = parseInt(prompt(menu));
    switch (opcao){
        case 1:
            adicionarLivro();
            break;
        case 2:
            listarLivros();
            break;
        case 3: 
            cadastrarUsuario();
            break;
        case 4:
            listarUsuarios();
            break;
        case 5:
            emprestimos();
            break;
        case 6:
            devolucoes();
            break;
        case 7:
            calcular();
            break;
        case 8:
            relatorios();
            break;
        case 0:
            console.log('Sistema encerrado.');
            break menu;
        default:
            console.log('Opção inválida.');
    };
};

//Funções
function adicionarLivro() {
    let livro = { 
        titulo: prompt('Digite o Titulo do Livro: '),
        autor: prompt('Digite o nome do Autor: '),
        disponivel: true };
    biblioteca.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado!`);
};

function listarLivros() {
    console.log("\nLista de Livros:");
    biblioteca.forEach((livro, index) => {
        const status = livro.disponivel ? "Disponível" : "Emprestado";
        console.log(`${index + 1}. ${livro.titulo} - ${livro.autor} (${status})`);
    });
};

function cadastrarUsuario() {
    let usuario = { 
        nome: prompt('Digite seu nome: '),
        email: prompt('Digite seu email: '), 
        telefone: prompt('Digite seu contato(número de celular): '),
    };
    usuarios.push(usuario);
    console.log(`Usuário "${usuario.nome}" cadastrado com sucesso!`);
};

function listarUsuarios() {
    console.log("\nLista de Usuários:");
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. ${usuario.nome} - ${usuario.email} - ${usuario.telefone}`);
    });
};
//Falta correções
function emprestimos() {
    console.log('Selecione o titulo do livro a ser emprestado: *ATENÇÃO O PRAZO PARA DEVOLUÇÃO É DE 7 DIAS, AO PASSAR DESSE PRAZO ACARRETARA EM MULTA NO VALOR DE 1 REAL O DIA.');
    let nome = prompt('Digite seu nome: ');
    let nomeIndex = usuarios.findIndex((nomeObj) => nomeObj.nome === nome);
    if (nomeIndex !== -1) {
        let livro = prompt('Digite o titulo do livro: ');
        if (nome && livro === -1) {
            console.log('Nome e Titulo não encontrado.');
        } else {
            livrosEmprestados.push(Emprestado);
            console.log('Emprestimos realizado com sucesso, consulte a opção: Relatórios para mais informações.');
        };
    } else {

    }
};

function listarEmprestimos(){
    console.log('\nLista de Empréstimos:');
    livrosEmprestados.forEach((emprestimo, index) => {
        console.log(`${index + 1}. ${emprestimo.nome} - ${emprestimo.livro}`);   
    });
};

function devolucoes(){

};

function calcular(){};

function relatorios(){
    listarEmprestimos();
};

