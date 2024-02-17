import { IProduct, IProductsRepository } from "../../../../app/repositories/IProductsRepository";
import { ProductModel } from "../models/Product";

class ProductsRepository implements IProductsRepository {
    async listAll() {
        const products = await ProductModel.findAll();
        return products.map(item => {
            return {
                id: item.dataValues.id,
                name: item.dataValues.name,
                price: item.dataValues.price
            }
        })
    }

    async get(id) {
        const product = await ProductModel.findByPk(id);
        return {
            id: product.dataValues.id,
            name: product.dataValues.name,
            price: product.dataValues.price
        };
    }
    
    async create(data: IProduct) {
        await ProductModel.create({
            id: data.id,
            name: data.name,
            price: data.price,
            id_image: null
        })
    }

}

const productsRepository = new ProductsRepository();

export {productsRepository}