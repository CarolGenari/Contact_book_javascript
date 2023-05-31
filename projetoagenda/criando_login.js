// Criando a página de Login / Criar conta

// Como vamo criar uma rota para o Login, precisamos de um controller. As rotas
// vão delegar a tarefa de executar as coisas dentro daquela rota para um controller

// Criamos a rota do login no arquivo "routes.js"
// Criamos o arquivo "loginController.js"
// Criamos o arquivo "login.ejs"
    // Criamos os formulários, umn para login e outro para cadastro
    // O formulário deve ter um: <form action="/login/register" method="POST">
    // O outro formulário possui: <form action="/login/login" method="POST">
    // Esse action conterá o caminho da rota
    // Depois precisaremos criar essas rotas, para que os formulários possam ser
    // postados
    // Não podemos esquecer de colocar o csrfToken para não gerar o nosso erro 404

