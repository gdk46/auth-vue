<p align="center">
<img src="doc/backend-bookcase.svg" width="150">
</p>

<h1 align="center">
    <a href="https://pt-br.reactjs.org/">🔗 Title</a>
</h1>
<p align="center">🚀 escreva uma breve descrição do seu projeto aqui</p>
<p align="center">
<img src="https://img.shields.io/static/v1?label=framework&message=Laravel&color=ff2d20&style=for-the-badge&logo=laravel"/>
<img src="https://img.shields.io/static/v1?label=framework&message=livewire&color=fb70a9&style=for-the-badge&logo=ghost"/>
<img src="https://img.shields.io/static/v1?label=framework&message=Tailwind CSS&color=38B2AC&style=for-the-badge&logo=Tailwind css"/>
</p>
<p align="center">
<img src="https://img.shields.io/badge/license-MIT-blue"/>
<img src="https://img.shields.io/badge/npm-v16.13.1-blue"/>
<img src="https://img.shields.io/badge/contribution-welcome-green"/>
<img src="https://img.shields.io/badge/status project-welcome-green"/>
</p>

Índice
=================
<!--ts-->
* [Sobre](#sobre)
* [Screens](#screens)
* [Estrutura de pasta](#estrutura-de-pasta)
  * [Camadas da arquitetura](#camadas-da-arquitetura)
* [Instalação](#instalacao)
* [Como usar](#como-usar)
    * [Pre Requisitos](#pre-requisitos)
* [Tests](#testes)
* [Tecnologias](#tecnologias)
* [Features](#features)
* [Changelog this version](#changelog-this-version)
* [License](#license)
<!--te-->

## 🏁Sobre
Este aplicativo foi desenvolvido ...

## :framed_picture: Screens
imagens do projeto 
## Estrutura de pastas
<pre>
Projeto/
├── app/
│   └── composer.json
├── .gitignore
└── autoload.php
</pre>

### Camadas da arquitetura
pasta | camada | responsabilidade
------ | ------ | ------
component_module | component | responsável por agrupar componentes burros do sistema

## Boas práticas de codificação
1. `Types`
2. `References`
3. `Objects`
4. `Arrays`

#### Type
[1.1](#types--primitives) **Primitivo**: Quando você acessa um tipo primitivo, você trabalha diretamente em seu valor.

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`

```JavaScript
const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9
```
- Símbolos e BigInts não podem ser fielmente polyfilled,
 então eles não devem ser usados direcionar navegadores / ambientes
 que não os suportam nativamente.

. . .
## 🧰 Instalação
Utilize esse comando para clonar o repositório:
```GIT
git clone https://github.com/gleissonneves/repository
```
Caso não deseje clonar baixe o [código fonte](https://github.com/gleissonneves/repository/archive/refs/heads/main.zip).

*Acesse ao diretório:*
```shell
cd repository
```

*Instale as dependências:*
```shell
npm i ou npm update
```
*ou ainda*
```shell
yarn install ou yarn update
```

*inicie o servidor* 
```shell
npm server
```
*ou configure uma porta específica*
```shell
npm server --port 8080
```
## Como usar
  ### 🚧 Pre Requisitos 🚧

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)



## :hammer_and_wrench: Tests
```shell
npm run test
```

## :computer: Tecnologias
* [Bootstrap](site)
* [HTML](site)
* [CSS](site)
* [PHP](site)

## :heavy_check_mark: Features

- [x] cadastro de usuário
- [x] Sing in/Sing out
- [ ] Dashboard

. . .

## Demo
veja a [demostração](https://www.google.com).

## Changelog this version
Nota de [Versão](https://github.com/gleissonneves/repository/CHANGELOG.md).

## Licença
Este projeto esta sobe a licença MIT.

Feito com :heart: por Gleisson Neves 👋🏽