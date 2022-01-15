import express from 'express';
import cors from 'cors';
import { Server } from 'http';
import { infoHandler } from '../handler/info-handler';
import { errorsHandler, reqLogger, unknownPathHandler } from 'common';

const app: express.Application = express();

export function startServer(): Promise<Server> {
  return new Promise((resolve) => {
    app.use(cors());
    app.use(reqLogger);
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    registerHandlers();
    app.use(unknownPathHandler);
    app.use(errorsHandler);
    const server = app.listen(3000);
    console.log(`[${new Date().toISOString()}]: App listening on port 3000...`);
    resolve(server);
  });
}

function registerHandlers() {
  app.use('/info', infoHandler);
}
