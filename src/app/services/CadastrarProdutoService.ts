import {v4 as uuid} from "uuid";
import { productsRepository } from "../../infra/db/sequelize/repositories/ProductRepository";


interface Request {
    name: string;
    price: number;
}

class CadastrarProdutoService {
    async execute({name, price}: Request){
        const newProduct = {
            id: uuid(),
            name: name,
            price: price,
            id_image: null
        }
        await productsRepository.create(newProduct);
    }
}

const cadastrarProdutoService = new CadastrarProdutoService();

export {cadastrarProdutoService};