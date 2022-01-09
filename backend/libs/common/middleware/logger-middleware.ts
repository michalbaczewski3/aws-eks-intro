import { NextFunction, Request, Response } from 'express';

const NS_PER_SEC = 1e9;
const NS_TO_MS = 1e6;

export function reqLogger(req: Request, res: Response, next: NextFunction) {
  try {
    console.log('[' + new Date().toISOString() + ']: ' + req.method + ' ' + req.url + ' [STARTED]');
    const startTime = process.hrtime();
    res.on('finish', () => {
      console.log('[' + new Date().toISOString() + ']: ' + req.method + ' ' + req.url + ' [FINISHED] (' + getProcessDuration(startTime) + ' ms) ' + res.statusCode);
    });
    res.on('close', () => {
      console.log('[' + new Date().toISOString() + ']: ' + req.method + ' ' + req.url + ' [CLOSED] (' + getProcessDuration(startTime) + ' ms) ' + res.statusCode);
    });
    return next();
  } catch (e) {
    return next(e);
  }
}

function getProcessDuration(start: [number, number]): string {
  const diff = process.hrtime(start);
  return ((diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS).toString();
}
