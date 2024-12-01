import IProductRepository from '../../domain/interfaces/IProductRepository';
import IProductEntity from "../../domain/entities/IProductEntity";
import ProductApi from '../http/ProductApi';


export default class ProductRepository implements IProductRepository {
    async productAll() : Promise<IProductEntity[]> {
        const { data } = await ProductApi.getProducts();
        return data.data;
    }
}