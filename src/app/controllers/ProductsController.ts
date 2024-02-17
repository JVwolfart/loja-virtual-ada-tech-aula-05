import { Request, Response } from "express";
import { listarProdutosService } from "../services/ListarProdutosService";
import { cadastrarProdutoService } from "../services/CadastrarProdutoService";
import { criarTemplate } from "../helpers/TemplateHelper";
import path from "path";
import { buscarProdutoService } from "../services/BuscarProdutoService";

class ProductsController {
    async listar(req: Request, res: Response){
        const products = await listarProdutosService.execute();
        res.format({
            "application/json": () => {
                res.send(products);
            },
            "text/html": () => {
                const caminho = path.resolve(__dirname, '..', '..', 'infra' , 'templates', 'handlebars', 'products.hbs')
                const template = criarTemplate(caminho);
                res.send(template(products));
            }
        })
        
    }

    async buscar(req: Request, res: Response){
        const {id} = req.params;
        const product = await buscarProdutoService.execute(id);
        res.format({
            "application/json": () => {
                res.send(product);
            },
            "text/html": () => {
                const caminho = path.resolve(__dirname, '..', '..', 'infra' , 'templates', 'handlebars', 'product.hbs')
                const template = criarTemplate(caminho);
                res.send(template(product));
            }
        })
    }

    async criar(req: Request, res: Response){
        const {name, price} = req.body;
        await cadastrarProdutoService.execute({name, price});
        res.status(201).send();
    }
}

const productsController = new ProductsController();

export {productsController}