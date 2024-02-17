import { Router } from "express";
import { productsController } from "../controllers/ProductsController";
import { validate } from "./middlewares/ValidateMiddleware";
import { createProductSchema } from "./schemas/ProductSchema";

const productsRouter = Router();

productsRouter.get("/products", productsController.listar);
productsRouter.get("/products/:id", productsController.buscar);
productsRouter.post("/products", validate(createProductSchema), productsController.criar);

export {productsRouter}