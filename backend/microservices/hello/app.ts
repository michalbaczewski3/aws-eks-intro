import { startServer } from './src/server/app-server';
import { getAndLogExcBody } from 'common';

(async () => {
  try {
    await startServer();
  } catch (e) {
    console.log(`[${new Date().toISOString()}]: Fatal error:`);
    console.log(getAndLogExcBody(e));
  }
})();
