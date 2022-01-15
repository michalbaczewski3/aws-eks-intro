import { infoSchemaV0 } from './schema/info-schema-v0';
import { createBootstrapInfo } from './bootstrap/info-bootstrap';
import { DbCollectionEnum, DbEnum, initMongoClient, interpretMongoErrorOnDbInit } from 'common';
import { MongoClient } from 'mongodb';

export let mongoClient: MongoClient;

export async function initDb(): Promise<void> {
  console.log(`[${new Date().toISOString()}]: Db initialization started...`);
  mongoClient = await initMongoClient();
  await initInfoCollection();
  console.log(`[${new Date().toISOString()}]: Db initialization succeed`);
}

async function initInfoCollection(): Promise<void> {
  console.log(`[${new Date().toISOString()}]: ${DbCollectionEnum.info}  collection initialization started...`);
  try {
    await mongoClient.db(DbEnum.aei).createCollection(DbCollectionEnum.info, {
      validator: {
        $jsonSchema: infoSchemaV0
      }
    });
    console.log(`[${new Date().toISOString()}]: Created collection ${DbCollectionEnum.info} in ${DbEnum.aei} db`);
    await createBootstrapInfo();
    console.log(`[${new Date().toISOString()}]: Collection ${DbCollectionEnum.info} initialization succeed`);
  } catch (e) {
    interpretMongoErrorOnDbInit(e, DbCollectionEnum.info);
  }
}
