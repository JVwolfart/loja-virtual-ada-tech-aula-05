import { productsRepository } from "../../infra/db/sequelize/repositories/ProductRepository";

class ListarProdutosService {
    async execute(){
        const products = await productsRepository.listAll();
        return products;
    }
}

const listarProdutosService = new ListarProdutosService();

export {listarProdutosService};