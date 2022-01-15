import { MongoClient } from 'mongodb';
import { getMongoDriverUrlFromEnv } from './db-url-builder-service';
import { DbEnum, mongoError, MongoErrorCodeEnum, NTExceptionTypeEnum } from '../model';
import { getPwnException } from '../service';

export function interpretMongoErrorOnDbInit(e: any, collectionName: string): void {
  if (e.name && e.name === mongoError && e.code === MongoErrorCodeEnum.ListeningError) {
    console.log(`[${new Date().toISOString()}]: Db collection ${collectionName} db already exists`);
  } else {
    throw getPwnException(NTExceptionTypeEnum.UnexpectedApiException, e);
  }
}

// use me when there isn't unique index on collection
// eslint-disable-next-line
export function interpretMongoErrorOnEntitySave(e: any): never {
  if (e.name && e.name === mongoError && e.code === MongoErrorCodeEnum.DuplicateKeyError) {
    // this should never happen when there isn't unique index
    throw getPwnException(NTExceptionTypeEnum.EntityAlreadyExistsException, 'Entity already exists with key');
  } else if (e.name && e.name === mongoError && e.code === MongoErrorCodeEnum.DocumentValidationError) {
    // this should never happen after appropriate validation
    throw getPwnException(NTExceptionTypeEnum.ValidationException, 'Missing or incorrect properties');
  } else {
    throw getPwnException(NTExceptionTypeEnum.UnexpectedApiException, e);
  }
}

export async function initMongoClient(): Promise<MongoClient> {
  console.log(`[${new Date().toISOString()}]: Init mongo client started...`);
  const mongoClient: MongoClient = createMongoClient();
  await mongoClient.connect();
  await mongoClient.db(DbEnum.admin).command({ ping: 1 });
  console.log(`[${new Date().toISOString()}]: Init mongo client succeed`);
  return mongoClient;
}

export function createMongoClient(): MongoClient {
  return new MongoClient(getMongoDriverUrlFromEnv(), { useUnifiedTopology: true });
}
