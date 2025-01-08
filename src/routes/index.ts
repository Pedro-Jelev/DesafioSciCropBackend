import { Router } from "express";
import { postsRoutes } from "./posts.routes";

export const routes = Router();

routes.use("/", postsRoutes);
