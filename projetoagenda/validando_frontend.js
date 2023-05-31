// Validando Front-End

// Como já fizemos a validação dos formulários na parte de Back-End, agora 
// temos que fazer o mesmo para o Front-End

// Vamos então começar a trabalhar na pasta de "front-end", no arquivo "main.js"
// Depois, dentro dessa pasta de "front-end" tbm vamos criar outra pasta chamada
// de "modules" e dentro dela vamos criar 1 arquivo para os formulários que
// vamos validar
// Obs: Vamos validar os 2 formulários com a mesma classe, porque eles são iguais
// No mundo real, isso não acontece

// Criamos então o arquivo "Login.js"
// No arquivo "login.ejs" que está na pasta "views" vamos colocar uma classe em
// cada um dos formulários: uma class="form-cadastro" e a outra class="form-login"

// Depois, na classe que estamos criando no arquivo "Login.js" vamos fazer essa
// class herdar de formClass e usar essas classes que definimos

// Camos instanciar essa classe criada em "Login.js" no arquivo "main.js"

// Essa validação de formulários no front-end é muito útil, porque não é preciso
// que a página fique atualizando e indo ao servidor para fazer essa validação