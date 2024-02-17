import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { routes } from "./app/routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
    console.log("Servidor iniciado com sucesso!");
})