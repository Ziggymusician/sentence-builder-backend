import { Request, Response, NextFunction } from "express";

import { ISentenceRequest } from "../interfaces";
import { Sentence } from "../models";

export const getSentences = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  Sentence.findAll({ attributes: ["sentence", "sentence"] })
    .then((results) => {
      res.status(200).json({ sentences: results.map((res) => res.sentence) });
    })
    .catch((err) => {
      res.status(404).json({ message: "No Sentences found" });
      console.log(err);
    });
};

export const saveSentence = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { sentence } = req.body as ISentenceRequest;

  if (!sentence) {
    res.status(400).json({ message: "Please privide a Sentence" });
    return;
  }

  Sentence.create({ sentence })
    .then((results) => {
      res.status(201).json({ message: "Sentence Successfully Created" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create the Sentence" });
      console.log(err);
    });
};
