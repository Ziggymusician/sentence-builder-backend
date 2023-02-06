import { Request, Response, NextFunction } from 'express';

import { SentenceRequest } from '../models';

export const getSentences = (req: Request, res: Response, next: NextFunction): void => {
    res.status(200).json([
       "Today it's so hot I can't cope",
       "Life just sucks sometimes",
       "Who do you think you are?",
       "There could only be one, ME!!"
    ]);
};

export const saveSentence = (req: Request, res: Response, next: NextFunction): void => {
    const body = req.body as SentenceRequest;
    res.status(200).json({ message: 'Success', payload: body });
};
