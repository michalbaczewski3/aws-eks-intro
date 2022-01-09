import { NextFunction, Request, Response } from 'express';
import { getPwnException } from '../service';
import { NTExceptionTypeEnum } from '../model/exception';

export function unknownPathHandler(req: Request, res: Response, next: NextFunction) {
  try {
    throw getPwnException(NTExceptionTypeEnum.NotFoundException, 'Path not found');
  } catch (e) {
    return next(e);
  }
}
