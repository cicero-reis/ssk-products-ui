import IProductEntity from "../entities/IProductEntity";

export default interface IProductRepository {
    productAll(): Promise<IProductEntity[]>;
}