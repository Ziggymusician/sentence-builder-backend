import express, { Express } from 'express';

const app: Express = express();

app.listen(3000, (): void => {
    console.log('Server Started!')
});