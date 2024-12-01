import IProductRepository from "@/domain/interfaces/IProductRepository";
import IProductGetAllUseCase from "./interfaces/IProductGetAllUseCase";
import IProductEntity from "@/domain/entities/IProductEntity";

export default class ProductGetAllUseCase implements IProductGetAllUseCase {

    constructor(private readonly productRepository: IProductRepository) {}

    async execute() : Promise<IProductEntity[]> {
        try {
            return await this.productRepository.productAll();
        } catch (error) {
            console.error('Erro ao buscar produtos', error);
            throw error;
        }
    }
}