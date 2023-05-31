// Logando Usuários

// Vamos então criar a rota de login/login, no arquivo "routes.js"
// route.post('/login/login', loginController.login);
// Agora temos que criar esse método login no arquivo "loginController" e tbm
// temos que criá-lo dentro da classe Login do arquivo "LoginModels"

// Dentro do método login, fizemos alguma verificações: se o usuário existe na 
// base de dados e pode logar; se a senha que ele está enviando é a mesma que está
// na base de dados

// Agora, se o usuário realemente estiver cadastrado e passar por todas as verificações
// no controller vamos criar uma sessão para esse usuário
// Essas sessões devem estar tbm no middleware global, assim como as mensagens:
// res.locals.user = req.session.user; (sessão do usuário salva)

// Depois, na navbar, vamos mostrar o link de entrar apenas para usuários que não
// estiverem logados

// Agora temos que criar a opção de logout tbm
// Vamos criar essa rota: route.get('/login/logout', loginController.logout);
// Depois temos que criar esse logout no Controller
// Depois no método index, criamos uma linha que, se o usuário conseguir logar
// uma página "login-logado" será renderizada na tela. Criamos esse arquivo nos
// views

