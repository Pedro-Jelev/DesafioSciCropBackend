import express, { Request, Response } from "express";
import { migrationsRun } from "./database/sqlite/migrations";
import { routes } from "./routes";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(routes);

migrationsRun();

app.use((error: Error, req: Request, res, next: Function) => {
  console.error(error);

  res.status(500).json({
    status: error,
    message: "internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});
