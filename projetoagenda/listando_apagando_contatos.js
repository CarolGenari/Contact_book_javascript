// Listando e Apagando Contatos (Read e Delete)

// temos que ir no nosso arquivo "index.js" e temos que criar um looping nas <tr>
// da tabela, para que cada contato adicionado na base de dados tbm seja adicionado
// numa <tr> da tabela

// Vamos começar editando o arquivo "homeController", importando a função Contato,
// que está no "ContatoModel"
// No "ContatoModel" vamos criar uma função buscaContatos
// Depois teremos que modificar a função que já existia no "homeController", que
// era onde o index estava sendo renderizado na tela, para uma função assíncrona
// (async await)

// Agora temos que injetar isso que foi feito no "index.ejs". Faremos isso usando
// if
// Tbm colocaremos 2 links nesse formulário, com as opções de Editar e Excluir
// contato. Já temos a rotas e todo o resto do Editar Contato. Agora temos que
// fazer o mesmo para Excluir

// Criamos a rota do dele em "routes.js"
// Criamos a função assíncrona em "contatoController"
// Agora temos que criar a função em "ContatoModel"

// Depois, no formulário do arquivo "index.ejs" temos que criar uma condicional
// para aparecer uma mensagem, caso não haja contatos na lista