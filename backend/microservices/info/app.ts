import { startServer } from './src/server/app-server';
import { getAndLogExcBody } from 'common';
import { initDb } from './src/db/db-init';

(async () => {
  try {
    await initDb();
    await startServer();
  } catch (e) {
    console.log(`[${new Date().toISOString()}]: Fatal error:`);
    console.log(getAndLogExcBody(e));
  }
})();
