// Criando Usuários: Parte 1

// Temos que criar as rotas, que definimos no s formulários
// Vamos abrir o arquivo "routes.js"
  // Vamos criar a rota: route.post('/login/register', loginController.register);
  // No arquivo "loginController.js" temos que fazer o mesmo
  // Mas não é no controller que fazemos o tratamento dos dados enviados no 
  // formulário. Temos que fazer isso sempre no Models
  // Dentro da pasta "models" vamos criar o arquivo "loginModel"

// Os dados que são obtidos no formulário, dentro do loginController, com req.body
// devem ser passados para a class que está no loginModel. Para fazer isso:
  // vamos importar a classe Login para dentro do arquivo loginController
  // e depois dentro exports.register: const login = new Login(req.body);

// Dentro dessa classe Login, criada no arquivo "LoginModel.js" é que vamos validar
// todos os dados necessários
// Vamos tbm instalar um pacote, chamado validator, para fazer a verificação de
// e-mail e senha: npm install validator
// Criamos um método valida() para validar os dados de email e senha
// O método register() foi criado para, após o tratamento dos dados, o registro de
// usuário ser feito na base de dados, mas como deve retornar um Promisse, temos
// que usar async await. Deveremos fazer o mesmo no arquivo "loginContoller", já
// que esse método está sendo importado para lá. Além disso, se o usuário não conseguir
// fazer o cadastro e nem login, ele será redirecionado para a mesma página. Agora
// temos que tratar das mensagens de erro, que vão aparecer para o usuário, caso 
// ele não consiga acessar o site

// Para fazer as mensagens de erro, vamos no arquivo "login.ejs" para adicioná-las,
// mas antes, vamos criar um arquivo "messages.ejs" que ficará nos parciais, dentro
// da pasta "includes"
// Vamos criar um if no "messages.ejs" , mas temos que usar o middleware global 
// que já tínhamos criado para fazer com que essas mensagens fiquem disponíveis 
// em todas as páginas (locals)
// Vamos então fazer: exports.midlewareGlobal = (req, res, next) => {
                          // res.locals.errors = req.flash('errors');
                          // res.locals.success = req.flash('success');
                            //     next();
                            // };
// Agora temos que incluir esse arquivo "messages.ejs" no arquivo "login.ejs"
// Depois temos que criar uma condicional no "loginControllers", dentro do método
// register, mas exibir mensagens de erro ou sucesso quando o usuário tentar logar

// Conseguimos cadastrar um usuário na base de dados, mas agora temos que resolver
// alguns problemas, porque a senha está aparecendo


// Criando Usuários: Parte 2

// Continuando, para resolver a questão de segurança da senha do usuário, temos
// que instalar um pacote: npm install bcryptjs
// Instalado, vamos importá-lo no arquivo "LoginModel.js"

// Antes do usuário ser criado, vamos fazer:             
    // const salt = bcryptjs.genSaltSync();
    // this.body.password = bcryptjs.hashSync(this.body.password, salt);

// Obs: O Hash é uma função deterministica. Isso quer dizer que, dada uma certa 
// entrada, ela produzirá sempre a mesma saída. Adicionar um salt aleatório, 
// garante que o hash produzido será sempre diferente. Isso protege seu repositório 
// de um Rainbow table attack.

// Agora temos que verificar os dados de cadastro de usuário, para não permitir
// que 2 emails iguais sejam cadastrados
// Como vamos mexer na base de dados, vamos usar async await novamente. Vamos 
// criar um método await this.userExists(); dentro da calsse Login e dentro do 
// método register() e depois vamos chamá-lo com async:  async userExists() {
      //   await LoginModel.findOneAndDelete({ email: this.body.email });
      //   if(user) this.errors.push('Usuário já existe!');

