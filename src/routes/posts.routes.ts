import { Router } from "express";
import { PostsController } from "../controllers/PostsController";

const postsController = new PostsController();
export const postsRoutes = Router();

postsRoutes.post("/", postsController.create);
postsRoutes.get("/", postsController.index);
postsRoutes.get("/:id", postsController.show);
postsRoutes.patch("/:id", postsController.delete);
