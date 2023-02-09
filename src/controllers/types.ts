import { Request, Response, NextFunction } from "express";

import { IType } from "../interfaces";
import { Type, Word } from "../models";

export const getTypes = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  Type.findAll()
    .then((response) => {
      const types: IType[] = response.map(({ id, value }) => ({ id, value }));
      res.status(200).json({ types });
    })
    .catch((err) => {
      res.status(404).json({ error: "No types found" });
    });
};

export const getTypeWords = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const typeId = req.params.id;

  Word.findAll({ where: { typeId } })
    .then((results) => {
      const words = results.map(({ word }) => word);
      res.status(200).json({ words });
    })
    .catch((err) => {
      res.status(404).json({ error: `No words found with typeId: ${typeId}` });
    });
};
