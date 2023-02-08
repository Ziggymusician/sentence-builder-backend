import express, { Express, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";

import sequelize from "./utils/database";
import { routes } from "./routes";

// https://stackoverflow.com/questions/50379839/connection-java-mysql-public-key-retrieval-is-not-allowed

const app: Express = express();
const baseURL = "/api/v1";
const { sentencesRoutes, typesRoutes } = routes;

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction): void => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Handle Routes
app.use(`${baseURL}/types`, typesRoutes);
app.use(`${baseURL}/sentences`, sentencesRoutes);

(async (): Promise<void> => {
  try {
    await sequelize.sync({ force: false });

    app.listen(3000, (): void => {
      console.log("Server Running!");
    });
  } catch (err) {
    sequelize.close();
    console.error(err);
  }
})();
