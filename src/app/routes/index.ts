import { Router } from "express";
import { productsRouter } from "./products.routes";

const routes = Router();

routes.use(productsRouter);

export {routes}