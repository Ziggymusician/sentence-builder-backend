# Sentence Builder Backend

Restful API for the Dynamic Sentence Builder

## How to run the Backend API App:

Run: `docker compose up --build`

## Once the MySQL and Backend containers are successfully running:

Run: `npx sequelize-cli db:seed:all` to populate the `types` and `words` DB tables.

## You can now access:

- GET `http://localhost:3000/api/v1/types`
- GET `http://localhost:3000/api/v1/types/:id/words`
- GET `http://localhost:3000/api/v1/sentences`
- POST `http://localhost:3000/api/v1/sentences`
