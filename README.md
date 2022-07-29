<p align="center">
    <img src="assets\stars.png">
    <a href="https://stars-in-tech.herokuapp.com/"><img src="https://img.shields.io/badge/deploy-heroku.com-purple" alt="Deploy on heroku" /a>
    <a href="https://stars-in-tech.herokuapp.com/minha-rota-de-documentacao"><img src="https://img.shields.io/badge/documentation-swagger-purple" alt="Documentation on Swagger" /a>
    <a img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/maysafig/stars-in-tech?color=purple">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/maysafig/stars-in-tech?color=purple">
</p>

## Sumário

<!--ts-->
- [Apresentação](#apresentação)
- [Tecnologias, bibliotecas e dependências](#tecnologias-bibliotecas-e-dependências)
- [Arquitetura MVC](#arquitetura-mvc)
- [Features e rotas](#features-e-rotas)
- [Rotas de usuária](#rotas-de-usuária)
- [Rotas de Stars](#rotas-de-stars)
- [Instalação](#instalação)
- [Teste Jest](#teste-jest)
- [Autora](#autora)
<!--te-->

## Apresentação

<p align="justify">
A API Stars In Tech tem a proposta de reunir informações sobre mulheres criadoras de conteúdo sobre tecnologia. 
Em nosso banco de dados será possível cadastrar as plataformas utilizadas para disponibilização dos conteúdos, com o intuito de termos mais fontes de referencia para estudos e também para divulgar e incentivar o trabalho de outras mulheres. 
</p>

## Tecnologias, bibliotecas e dependências

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm ou yarn`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|
| `jsonwebtoken `| Dependência que implementa o protocolo JSON Web Token.|
| `bcrypt`| Bcryptjs é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password.|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente.|
| `jest`| Jest é uma estrutura de teste JavaScript.|
| `swagger`| Gera a documentação.|
| `heroku`| Hospeda a aplicação. |

## Arquitetura MVC

```
 📁stars-in-tech
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||
   |  ||--📁 controller
   |  |    |- 📄 authController.js
   |  |    |- 📄 starsController.js
   |  |    |- 📄 userController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 configDBScript.js
   |  |    |- 📄 mongooseConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 starsModels.js
   |  |    |- 📄 userModels.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 index.js
   |  |    |- 📄 starsRoutes.js
   |  |    |- 📄 starsRoutes.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |  |
   |  |--📁 test
   |  |   |- 📄 stars.test.js
   |  |   |- 📄 user.test.js
   |  |
   |  |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js
```
## Features e rotas

Esta API está sendo escutada na `porta 8080` e para que todas as rotas possam ser acessadas localmente é necessário usar `http://localhost:8080/` antes dos endpoints de requisição.
Algumas dos endpoins necessitam de autenticação, login e permissão de usuária administradora.

### Rotas de usuária

| Feature | Método | Rota | Status | Auth | Login |
|---------|--------|------|--------|------|-------|
| Lista todas as usuárias  | GET | `/users` | 200 | ✔️ | ✔️ |
| Lista todas as usuárias por ID | GET | `/users/:id` | 200 | ✔️ | ✔️ |
| Cria usuária | POST | `/users` | 201 | ✔️ | ✔️ |
| Cria login de usuária | POST | `/users` | 201 | ✔️ | ✔️ |
| Atualiza dados da usuária | PUT | `/users/update/:id` | 200 | ✔️ | ✔️ |
| Atualiza o github da usuária pelo ID | PATCH | `/users/modify/:id` | 200 | ✔️ | ✔️ |
| Deleta usuária por ID | DELETE | `/users/delete/:id` | 200 | ✔️ | ✔️ |

### Rotas de Stars

| Feature | Método | Rota | Status | Auth | Login | Adm |
|---------|--------|------|--------|------|-------|-----|
| Lista todas as stars | GET | `/stars` | 200 |  ✔️  |  ✔️  |  ✔️  |
| Lista todas as stars por ID | GET | `/stars/:id` | 200 |  ✔️  |  ✔️  |  ✔️  |
| Cria uma star | POST | `/stars/create` | 201 |  ✔️  |  ✔️  |  ✔️  |
| Atualiza dados da star | PUT | `/stars/update/:id` |  200 |  ✔️  |  ✔️  |  ✔️  |
| Atualiza o username da star pelo ID | PATCH | `/stars/modify/:id` | 200 | ✔️ | ✔️ | ✔️ |
| Deleta star por ID | DELETE | `/stars/delete/:id` | 200 | ✔️ | ✔️ | ✔️ |

***PROTEÇÃO*** Para testar via Postman, passar token no header de autenticação $ Bearer Token

```
As rotas referentes as Stars necessitam de permissão de administrador. 
Por padrão, apenas a usuária referente a criadora da API possuí essa permissão, que é definida por um script que é executado
no momento da inicialização do banco de dados.
```
Esse script cria de forma automática a usuária administrativa no banco de dados e define o seu perfil como `isAdm : true` .

## Instalação 

```
Clonar o repositório
$ git clone https://github.com/Maysafig/stars-in-tech

# Entrar na pasta do repositório
$ cd stars-in-tech

# Instalar as dependências
- `npm init -y`
- `npm install `
- `npm install express `
- `npm install cors`
- `npm install nodemon `
- `npm install mongoose `
- `npm install dotenv-safe `
- `npm install jsonwebtoken `
- `npm install bcrypt `

# Executar o servidor
$ npm start
```

## Teste Jest

- Instalar o Jest dentro da pasta `stars-in-tech`
- Inicialize o comando de instalação `npm install --save-exact jest@28.1.0 --save-dev` para instalar o Jest.
- Incluir o no package_json -> `"test:watch": "jest --watchAll"`.
- Inicialize com o comando `npm run test:watch` para testar.

## Autora

<p align="center"> 
<a>
 <img style="border-radius: 50%" src="assets\maysa.totvs.jpg" width="100px alt="Foto de Perfil Maysa"/>
 <br/>
</a>
</p>

<p align="center">Desenvolvido por <a href="https://www.linkedin.com/in/maysa-figueiredo" target="_blank"><img src="https://img.shields.io/badge/-Maysa_Figueiredo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/maysa-figueiredo" target="_blank"></a></p>

