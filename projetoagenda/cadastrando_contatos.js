// Cadastrando Contatos (Create)

// A primeira coisa a se fazer é criar a rota de contatos, no arquivo "routes.js"
// Depois crir o arquivo de controller: "contatoController.js"

// Já está funcionando a rota /contato/index
// Agora temos que criar uma página HTML para ser renderizada nessa rota

// Vamos criar um arquivo ejs "contato.ejs", para podermos criar o formulário
// para cadastro de usuário
// Agora vamos no controller e vamos renderizar esse arquivo "contato.ejs"

// Essa página só estará disponível para usuários logados, ou seja, se o usuário
// sair da app, não terá acesso a essa página. Para isso, vamos fazer o middleware
// checar se existe o usuário na sessão. Vamos criar um middleware, chamado de
// loginRequired que fará essa checagem

// Middleware criado e configurado e agora para usar, temos que importá-lo nas 
// rotas: primeiro vamos jogá-lo numa const -» const { loginRequired } = require('./src/middlewares/middleware');
// e depois vamos colocar esse middleware como parâmetro na rota criada para
// o contato: route.get('/contato/index', loginRequired, contatoController.index);


// Até agora temos apenas o formulário. Agora temos que tratar da parte do register, 
// onde vamos receber os dados enviados nesse formulário e cadastrar o susuário na base de dados.
// Vamos então criar a rota '/contato/register'
// Depois temos que criar essa função register no controller

// Agora temos que criar o Model do contato. Anteriormente, nos outros models, 
// estávamos criando classes. Agora vamos trabalhar com funções
// Como já tínhamos o método valida() para fazer a validação dos dados; e o método
// cleanUp() onde recebemos/capturamos os dados enviados pelo usuário (body) no
// formulário do login, apenas copiamos e fizemos alguma modificações

// Como a função register trabalha com a base de dados, registrando o usuário,
// ela deve ser uma função assíncrona (async await). Lá no controller ela tbm
// deve ser uma função asssíncrona
// Não podemos esquecer de importar essa função Contato, que criamos no ContatoModel
// para dentro do controller

// Agpora já podemos registrar um contato e ele já irá aparecer na nossa base de
// dados

// Contato criado, queremos que o usuário seja direcionado para a página de edição
// de contato. Tbm faremos isso no controller, dentro da função register
// req.session.save(() => res.redirect(`/contato/index${contato.contato._id}`));
// Agora temos que criar essa rota: /contato/index/:id. Tem que ser com os : antes
// do id porque é um parâmetro de URL
// Rota criada: route.get('/contato/index/:id', loginRequired, contatoController.editIndex);
// Agora vamos criar essa função editIndex no controller
// Depois temos que criar uma função no ContatoModel para fazer algumas verificações
// Como fizemos uma função assíncrona no ContatoModel, agora temos que mudar a
// função co controller para isso tbm
