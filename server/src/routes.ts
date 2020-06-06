import express from 'express';
import knex from './database/connection';
import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const pointsController = new PointsController;
const itemsController = new ItemsController;

routes.get('/items',itemsController.index );

routes.post('/points', pointsController.create );
routes.get('/points', pointsController.index );
routes.get('/points/:id', pointsController.show );



// por padrão a comunidade utiliza index (lista), show (exibir unico), create ou store (criar), update (atualizar), delete (excluir) ou destroy

export default routes;

//podemos refatorar para restrutura o codigo com patterns
//service pattern
//repository pattern