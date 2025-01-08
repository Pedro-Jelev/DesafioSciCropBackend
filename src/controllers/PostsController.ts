import { Request, Response } from "express";
import { sqliteConnection } from "../database/sqlite";

export class PostsController {
  async create(req: Request, res: Response) {
    const { title, content }: { title: string; content: string } = req.body;
    const database = await sqliteConnection();
    const checkDuplicateTitle = await database.get(
      "SELECT * FROM posts WHERE title = (?)",
      [title]
    );

    if (checkDuplicateTitle && checkDuplicateTitle.isDeleted != 1)
      return res.status(400).json({
        Error:
          "Não foi possível criar o post porque já existe um post cadastrado com o mesmo título",
      });

    await database.run("INSERT INTO posts (title, content) VALUES (?, ?)", [
      title,
      content,
    ]);

    return res.status(201).json("Post criado com sucesso");
  }

  async index(req: Request, res: Response) {
    const database = await sqliteConnection();
    const posts = await database.all(
      "SELECT * FROM posts WHERE isDeleted = 0 ORDER BY created_at DESC"
    );

    if (!posts)
      return res.status(400).json({
        Error: "Nenhum post encontrado",
      });

    return res.status(200).json(posts);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const database = await sqliteConnection();
    const post = await database.get("SELECT * FROM posts WHERE id = (?)", [id]);

    if (!post || post.isDeleted == 1)
      return res.status(400).json({
        Error: "Não foi possível localizar esse post",
      });

    return res.status(200).json(post);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const database = await sqliteConnection();
    const checkExistencePost = await database.get(
      "SELECT * FROM posts WHERE id = (?)",
      [id]
    );

    if (!checkExistencePost || checkExistencePost.isDeleted == 1)
      return res
        .status(400)
        .json({ Error: "O post não existe ou já foi deletado!" });

    await database.run("UPDATE posts SET isDeleted = (?) WHERE id = (?)", [
      1,
      id,
    ]);

    return res.status(200).json({ Sucesso: "Post deletado com sucesso" });
  }
}
