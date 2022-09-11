import { Router, Request, Response } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer();

categoriesRoutes.post("/", (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", (request: Request, response: Response) => {});

export { categoriesRoutes };
