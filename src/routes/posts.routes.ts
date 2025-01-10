import { Router } from "express";
import { PostsController } from "../controllers/PostsController";

const postsController = new PostsController();
export const postsRoutes = Router();

postsRoutes.post("/newpost", postsController.create);
postsRoutes.get("/", postsController.index);
postsRoutes.get("/details/:id", postsController.show);
postsRoutes.patch("/:id", postsController.delete);
