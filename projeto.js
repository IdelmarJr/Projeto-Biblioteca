let livros = [];
let usuarios = [];

//Menu de opções
menu:
while (true){
    const menu = `
    Selecione uma das opções:
    1 - Cadastrar livro:
    2 - Cadrastrar Usuário:
    3 - Realizar empréstimos de livros:
    4 - Registrar devoluções de livros:
    5 - Calcular multas por atraso na devolução:
    6 - Exibir relatórios:
    0 - Sair.
    : `;
    const opcao = parseInt(prompt(menu));
    switch (opcao){
        case 1:
            add();
            break;
        case 2: 
            addUser();
            break;
        case 3:
            emprestimos();
            break;
        case 4:
            devolucoes();
            break;
        case 5:
            calcular();
            break;
        case 6:
            relatorios();
            break;
        case 0:
            break menu;
        default:
            console.log('Opção inválida.');
    };
};

//Funções
function add(){};

function addUser(){};

function emprestimos(){};

function devolucoes(){};

function calcular(){};

function relatorios(){};

