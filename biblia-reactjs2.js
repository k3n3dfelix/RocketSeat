/*

criando o package.json
*/ 
yarn init -y

/*Adicionando o react*/
yarn add react 

/*Adicionado o react-dom (arvore de lementos da aplicação) */
yarn add react-dom

/*pasta padroes projeto react*/ 
src, public .

/* Adicionar o babel ao projeto*/
yarn add @babel/core @babel/cli @babel/preset-env -D

/* Verificar os comandos do babel*/
yarn add @babel/core @babel/cli @babel/preset-env -D

/* Tranpilar codigo javascrpt com babel*/
yarn babel src/index.js --out-file dist/bundle.js   

/*Para o babel transpilar html do react*/
yarn add @babel/preset-react -D

/* PAra instalar o webpack versão desenvolvimento*/ 
yarn add webpack webpack-cli -D

/* Instalar Axios*/
yarn add axios

/* Instalar o React Modal */ 
yarn add react-modal
yarn add @types/react-modal -D

/* Instalar polished (Helpers de cores)*/

/* Instalar Babel loader que é a integração entre o babel e o webapack*/
yarn add babel-loader -D

/* Adicionar um plugin para facilitar o import do bunble.js*/
yarn add html-webpack-plugin -D

/*Instalar webpack-dev-server - Atualizar o webpack e bundle automatico*/
yarn add webpack-dev-server -D

/* Criar variavel de ambiente NODE_ENV produção ou development*/
/* linux */
NODE_ENV=production yarn webpack
/* windows - Definir variavesis de ambiente independete do sistema*/
yarn add cross-env -D

/*Importando arquivos CSS*/
yarn add style-loader css-loader -D

 /* Adcionar o pre-procesadores sass no projeto*/
 yarn add sass-loader -D
 yarn add node-sass -D

 /* Adcionar o react Refresh */
 yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh

 /*Criando um projeto react já template*/ 
 yarn create react-app nomeProjeto --template typescript

 /* Instalando o Styled Components */
 yarn add styled-components

 /* Adicionar as tipagens do styled components*/
 yarn add @types/styled-components -D

 /* Instalar fake api mirage js*/
 yarn add miragejs

 /*Adicionar typescript react com redux */
 yarn add @types/react-redux -D

 /*Adicionar dependencia do Json server */
 yarn add json-server -D

 /* Adcionar Axios  */
 yarn add axios

 /* Adicionr biblioteca Immer evitar verbosidade para fazer alterações de estado */
 yarn add immer

 /*Adicionar devtools para redux  */
 yarn add redux-devtools-extension