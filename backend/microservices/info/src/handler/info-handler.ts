import express, { NextFunction, Request, Response } from 'express';

export const infoHandler = express.Router();

infoHandler.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ msg: 'OK' });
  } catch (e) {
    return next(e);
  }
});
