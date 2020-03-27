const express = require ('express');
const cors = require ('cors');
const routes = require  ('./routes');
const app = express();

app.use(cors(
//{
//    origin: 'http://meuapp.com.br'
//}
));
app.use(express.json());
app.use(routes);
/** 
 * rotas / recurso
 */



/**
 * motodos http
 * 
 * get: buscar/listar uma informação no back-end
 * post: criar uma informação no back-end
 * put: alterar uma informação no back-end
 * delete: deletar uma informação no back-end
 */

 /**
  * tipos de parametros:
  *
  * Query Params: parametros nomeados enviados na rota apos o "?" (filtros, paginação)
  * Route Params: Parametros utilizados para indentificar recursos (unico usuário)
  * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Sql: mysql, sqlite, postgresql , oracle , microsoft sql server
   * NoSql: MongoDB, couchDB, etc
   * 
   */

   /**
    * Driver: select = from users
    * Query Builder: table ('users').select('*').where()
    */


app.listen(3333);
