import knex from 'knex';
import path from 'path'
//no nlw utilizam o sqlite3

const connection = knex({
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname,"database.sqlite"),
    },
    useNullAsDefault: true
 });
//
// serao criados as tabelas
// point (postos de coleta)
//    - image
//    - name
//    - email
//    - whatsapp
//    - latitude
//    - longitude 
//    - city
//    - uf
// item (itens coletados)
//    - image
//    - title
// point_items (relacionamento dos itens  que um posto coleta)
//    - point_id
//    - item_id

/* testar substituindo pelo MySQL depois 
const connection = knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'nlwdb',
      port : 3306,
      password : 'V1wO7O',
      database : 'nlw'
    }
  });
*/

  export default connection;

  // Migrations = histórico de atividades do banco de dados

