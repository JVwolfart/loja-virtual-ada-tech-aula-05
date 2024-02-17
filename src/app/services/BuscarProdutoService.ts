import { productsRepository } from "../../infra/db/sequelize/repositories/ProductRepository";

class BuscarProdutoService {
    async execute(id: string) {
        const product = await productsRepository.get(id);
        return product;
    }
}

const buscarProdutoService = new BuscarProdutoService();

export {buscarProdutoService}