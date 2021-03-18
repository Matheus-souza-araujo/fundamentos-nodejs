====Iniciando o projeto com:
yarn init -y

====Instalando express:
yarn add express

==== configurando o nodemon: auxilia no reaload automático cada vez que há uma alteração na aplicação
yarn add nodemon

criamos o seguinte scpript no package.json
"scripts": {
    "dev":"nodemon src/index.js"
  },

Dessa forma toda vez que dermos um yarn dev, ele irá executar nosso servidor é irá atualizar de forma automática qualquer alteração


====Metódos HTTP
-GET => Buscar uma informação dentro do servidor.
-POST => Inserir uma informação dentro do servidor.
-PUT => Alterar informações no servidor.
-PACTH => Alterar uma única informação no servidor.
-DELETE => Deletar uma informação no servidor.


====Tipos de parâmetros que podemos receber
Route Params => Identificar um recurso editar/deletar/buscar
Query Params => Paginação/Filtro
Body Params => Os objetos insercão/alteração (JSON)


