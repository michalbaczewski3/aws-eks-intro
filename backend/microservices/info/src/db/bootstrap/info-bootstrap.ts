import { mongoClient } from '../db-init';
import { DbEnum, NTInfo } from 'common';
import { DbCollectionEnum } from 'common/model/db/db-collection-enum';
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
