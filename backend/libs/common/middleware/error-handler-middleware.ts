import { NextFunction, Request, Response } from 'express';
import { NTException } from '../model/exception';
import { getAndLogExcBody } from '../service';

export function errorsHandler(err: any, req: Request, res: Response, next: NextFunction) {
  try {
    const excBody: NTException = getAndLogExcBody(err);
    return res.status(excBody.status).json(excBody);
  } catch (e) {
    const message = 'Error handler middleware failed! This should never happened!';
    console.log('[' + new Date().toISOString() + '] ' + message);
    return res.status(500).json({ message });
  }
}
