import { sqliteConnection } from "..";
import { createPost } from "./createPost";

export async function migrationsRun() {
  const schemas = [createPost].join("");
  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.log(error));
}
