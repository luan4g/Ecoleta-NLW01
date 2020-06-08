![](https://img.shields.io/github/stars/luan4g/Ecoleta-NLW01?&color=blue)
![](https://img.shields.io/static/v1?label=build&message=passing&color=blue)
![](https://img.shields.io/github/license/luan4g/Ecoleta-NLW01?color=blue)

![](https://img.shields.io/badge/node-v12.16.3-blue?style=social&logo=Node.js&logoColor=black)
![](https://img.shields.io/badge/npm-v6.14.4-white?style=social&logo=npm)
![](https://img.shields.io/badge/expo-v3.21.3-white?style=social&logo=Expo&color=black)

![](https://img.shields.io/badge/platform-android-white?style=social&logo=android)
![](https://img.shields.io/badge/platform-iOS-white?style=social&logo=apple)

# Ecoleta

> ## Descrição
  
  Um projeto Full-Stack, com server criado com **node.js**, front-end com **ReacJS** e mobile com **React-native**. Este projeto foi construído no intuito de facilitar a coleta de resíduos recicláveis como: Lâmpadas, Pilhas e Baterias, Resíduos Orgânicos, etc... Trazendo assim um web disponibilizando assim com que as empresas possam se cadastrar no banco de dados do **Ecoleta**, para que assim usuários que queiram levam estes resíduos para a coleta possam identificar essas empresas no aplicativo do Ecoleta atráves de um mapa que também é disponibilizado neste aplicativo. É válido também ressaltar que as empresas cadastradas registram e-mail e telefones, para que no próprio aplicativo os usuários tenham um acesso mais facilitado. O aplicativo **Ecoleta** disponibiliza logo no ínicio um filtro por estado e cidade, facilitando mais ainda o acesso do usuário.
  
  Este projeto foi totalmente construído durante a NLW ( Next Level Week ) #1, um projeto proposto e disponibilizado pela RocketSeat, no intuito de elevar os alunos a um próximo nível profissionalmente durante uma semana, com estudo intensivo e com muita prática. 

> ## Download e Instalação

  Para conseguir visualizar e modificar o projeto em sua máquina, você deverá seguir alguns passos e conter em sua máquina algumas ferramentas.

  Este projeto utiliza as seguintes ferramentas:

  - [Node.js](https://nodejs.org/en/download/)
  - [Expo](https://expo.io/learn)
  - [ReacJS](https://pt-br.reactjs.org/)

  E para que você consiga fazer o download de uma forma mais fácil, seria muito interessante, você possuir o [Git](https://git-scm.com/) instalado em sua máquina.

  ### Download

  Para fazer o download via git, você precisará rodar este comando dentro da pasta que você deseja guardar o projeto:

  ```
    git clone https://github.com/luan4g/Ecoleta-NLW01.git
  ```

  Para que você consiga instalar o projeto e consiga rodar ele você, deverá ter instalado em sua máquina o **nodejs**, uma ferramenta opcional será o [**yarnpkg**](https://yarnpkg.com/). Pois para instalar o mobile e o web você poderá optar entre o yarn ou o npm.

  ### Instalação

  > #### Server

  Para instalar o server, você deverá instalar todas as dependências usadas, se você desejar ver as dependências usadas, basta dar uma olhada no arquivo **package.json**, mas para instalar instalar todas essas dependências, rode o seguinte comando:

  ```
  npm install
  ```

  e para você conseguir rodar o server na sua máquina, você deverá antes alterar o arquivo **ItemsController** dentro do diretório *src/controller*, alterando o endereço de ip na linha 13, para o seu endereço de ip, e só então você deverá rodar os seguintes comandos, e logo após iniciar o server:

  ```
  npm run seed:run

  npm run knex:migrate

  npm run dev
  ```

  logo após você rodar o segundo comando, deverá existir o seguinte arquivo **database.sqlite** dentro do diretório *src/database*, se este arquivo realment exisir, isso significará que seu banco de dados já terá iniciado. Para que você possa modificar as colunas do banco de dados, delete o banco de dados(**database.sqlite**) e logo após altere os arquivos, referente a tabela que você deseja alterar, dentro do diretório *src/database/migrations*.

  > #### Web

  Para que você consiga instalar o web em sua máquina você poderá optar entre npm ou yarnpkg, assim como no server, você deverá instalar todas as dependências usadas no projeto.

  > ##### Usando npm

  Para instalar e rodar o projeto em sua máquina, você deverá rodar os seguintes comandos em seu terminal/cmd:

  ```
  npm

  npm start
  ```

  > ##### Usando o yarnpkg

  Para instalar e rodar o projeto em sua máquina, você deverá rodar os seguintes comandos em seu terminal/cmd:

  ```
  yarn install

  yarn start
  ```

  Ao rodar esses comandos, o projeto web deverá abrir uma Aba em seu navegador padrão na seguinte url **http://localhost:3000**

  > #### Mobile

  Assim como o projeto web, no mobile, você também poderá optar entre o npm e o yarnpkg. Porém para você conseguir instalar e rodar o projeto mobiel, você deve obrigatoriamente ter instalado em sua máquina o [Expo](https://expo.io/learn), se você já está com o expo instalado em sua máquina, poderá rodar os mesmos comandos que você rodou para instalar e rodar o web.

# License

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.