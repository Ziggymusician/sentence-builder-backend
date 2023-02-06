import { Request, Response, NextFunction } from 'express';

export const getTypes  = (req: Request, res: Response, next: NextFunction): void => {
    res.status(200).json([
        { id: 1, value: 'Noun' },
        { id: 2, value: 'Verb' },
        { id: 3, value: 'Adverb' },
    ]);
};

export const getTypeWords = (req: Request, res: Response, next: NextFunction): void => {
    res.status(200).json(['the', 'they', 'are', 'those']);
};