export function getMongoDriverUrlFromEnv(): string {
  if (process.env['MONGODB_HOSTS'] && process.env['MONGODB_ROOT_USERNAME']
    && process.env['MONGODB_ROOT_PASSWORD'] && process.env['MONGODB_CONNECTION_OPTIONS']) {
    return getMongoDriverUrl(process.env['MONGODB_HOSTS'], process.env['MONGODB_ROOT_USERNAME'],
      process.env['MONGODB_ROOT_PASSWORD'], process.env['MONGODB_CONNECTION_OPTIONS']);
  } else {
    return 'Missing mongo envs';
  }
}

export function getMongoDriverUrl(mongoHosts: string, mongoRootUsername: string,
  mongoRootPassword: string, mongoConnectionOptions: string): string {
  return `mongodb://${mongoRootUsername}:${mongoRootPassword}@${mongoHosts}/${mongoConnectionOptions}`;
}
