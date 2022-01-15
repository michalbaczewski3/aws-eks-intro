import { mongoClient } from '../db-init';
import { DbCollectionEnum, DbEnum, NTInfo } from 'common';
import { ObjectId } from 'mongodb';

export async function createBootstrapInfo(): Promise<void> {
  const infoCollection = mongoClient.db(DbEnum.aei).collection(DbCollectionEnum.info);
  const defaultInfo: NTInfo = {
    _id: new ObjectId().toHexString(),
    foo: 'bar',
    schemaVersion: 0,
  };
  await infoCollection.insertOne(defaultInfo);
  console.log(`[${new Date().toISOString()}]: Created bootstrap info entity`);
}
