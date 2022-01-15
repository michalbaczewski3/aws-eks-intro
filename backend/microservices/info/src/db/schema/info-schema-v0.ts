export const infoSchemaV0: unknown = {
  bsonType: 'object',
  required: ['_id', 'foo', 'schemaVersion'],
  additionalProperties: false,
  properties: {
    _id: { bsonType: 'string' },
    foo: { bsonType: 'string' },
    schemaVersion: { bsonType: 'number' },
  }
};
