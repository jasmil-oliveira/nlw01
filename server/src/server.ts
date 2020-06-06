import express from 'express';
import cors from 'cors';
import routes from './routes';

import path from 'path';

const app = express();

app.use(cors()); // em ambiente de produção deve-se definir o orign

app.use(express.json()); // use serve para incluir uma funcionalidade, nesse caso exportar para json

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);
