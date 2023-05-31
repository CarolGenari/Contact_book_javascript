// Editando Contatos (Update)

// No arquivo "contatos.ejs" temos que fazer uma condicional no formulário, para
// que quando um contato for registrado, ele não possa ser registrado novamente

// Criaremos uma rota, que ainda não existe mas já adicionamos na condicional
// do formulário, que é /contato/edit/
// Criando a rota: route.post('/contato/edit/:id', loginRequired, contatoController.edit);

// Depois temos que criar a função assíncrona em controll
// Criamos a função construtora em ContatoModel
// Agora voltando no controller podemos usar o que criamos em ContatoModel