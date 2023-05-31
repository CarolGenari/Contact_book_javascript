// Helmet e CRSF(token): Segurança

// Variáveis de ambiente de desenvolvimento, que não serão publicadas em repositórios
require('dotenv').config();

// Chamando o Express e jogando ele numa aplicação para ser executado
const express = require('express');
const app = express();

// Usando o mongoose: Modelando a base de dados
const mongoose = require('mongoose');
//const connectionString = '';    // Url de conexão foi retirada daqui e enviada para o arquivo ".env"
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectei à base de dados.');
        app.emit('pronto');
    })
    .catch(e => console.log(e));

// Criando Sessões:
const session = require('express-session');
const MongoStore = require('connect-mongo');    // Para salvar as sessões na base de dados, ao invés da memória
const flash = require('connect-flash');         // Mensagens são salvas nas sessões

// Chamando as rotas definidas(home, contatos...)
const routes = require('./routes');     // Caminho do arquivo que contêm as rotas


const path = require('path');           // Usaremos para trabalhar com o caminho absoluto das pastas e arquivos
const { midlewareGlobal, checkCsrfError, csrfMiddleware  } = require('./src/middlewares/middleware');


// Usando o Helmet para segurança da aplicação
// const helmet = require('helmet');

// Usando o CSRF:
const csrf = require('csurf');

// app.use(helmet);
app.use(express.urlencoded({ extended: true }));  // Significa que podemos postar formulários para dentro da nossa app
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

// Configurando as Sessões:
const sessionOptions = session({
    secret: 'texto q ninguem vai saber',
    //store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave:false,
    saveUninitialized: false,
    cookie:{
        maxAge:1000 *60*60*24*7, //tempo q vai durar o cookie (7dias)
        httpOnly:true
    },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING})
});
 
app.use(sessionOptions);
app.use(flash());

// Caminho absoluto e engine que HTML vai usar:
app.set('views', path.resolve(__dirname, 'src', 'views')); // Caminho absoluto da pasta Views
app.set('view engine', 'ejs');

// App usando o CSRF(csurf)
app.use(csrf());

// Nossos Middlewares (funções que são executadas na rota; uma cadeia de coisas que são executadas)
app.use(midlewareGlobal);
app.use(csrfMiddleware);
app.use(checkCsrfError);


// Usando as rotas na aplicação
app.use(routes);    

// Fazendo acesso ao servidor na porta 3000 após a conexão à base de dados:

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});   