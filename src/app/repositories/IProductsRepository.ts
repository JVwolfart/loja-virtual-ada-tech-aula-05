interface IProduct{
    id: string;
    name: string;
    price: number;
    id_image: string | null;
}

interface IProductsRepository {
    listAll();
    create(data: IProduct);
}

export {IProductsRepository, IProduct}