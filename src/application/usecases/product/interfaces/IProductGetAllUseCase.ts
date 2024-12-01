import IProductEntity from '../../../../domain/entities/IProductEntity';

export default interface IProductGetAllUseCase {
    execute(): Promise<IProductEntity[]>;
}