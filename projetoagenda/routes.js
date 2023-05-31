const express = require('express'); // Chamamos o Express
const route = express.Router();     // Chamamos o Router

const homeController = require('./src/controllers/homeContoller'); // Caminho da pasta e arquivo que contém as rotas
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const { loginRequired } = require('./src/middlewares/middleware');

// Rotas da Home(index)
route.get('/', homeController.index);  

// Rotas de Login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);


// Rotas de contato

route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/:id', loginRequired, contatoController.editIndex);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);
route.get('/contato/delete/:id', loginRequired, contatoController.delete);




module.exports = route;     // Exportando essas rotas para serem usadas na app