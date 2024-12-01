import { defineStore } from "pinia";
import { toRaw } from 'vue';
import { 
    ACTION_LOAD_PRODUCTS, 
    ACTION_LOAD_SELECTED_PRODUCTS, 
    ACTION_ADD_ORDER,
    ACTION_REMOVE_ORDER
} from './actions';
import PoroductGetAllUseCase from "../../application/usecases/product/ProductGetAllUseCase";
import IProductEntity from "../../domain/entities/IProductEntity";
import ProductRepository from "../../infrastructure/Repositories/ProductRepository";

export const productStore = defineStore('productStore', {
    state: () => ({
        products: [] as IProductEntity[],
        selectedProduct: [] as IProductEntity[]

    }),
    actions: {
        async [ACTION_LOAD_PRODUCTS]() {
            // const productAll = new PoroductGetAllUseCase(new ProductRepository);
            // this.products = await productAll.execute();
            this.products = [
                {
                    id: '1',
                    name: 'Hamburger Classic',
                    description: 'A classic hamburger with lettuce, tomato, and cheese.',
                    price: 5.00,
                    stock: 1,
                    category_name: 'Food',
                    category_id: 1,
                    created_at: new Date().toISOString()
                },
                {
                    id: '2',
                    name: 'Cheeseburger',
                    description: 'A delicious cheeseburger with cheddar cheese.',
                    price: 10.00,
                    stock: 1,
                    category_name: 'Food',
                    category_id: 1,
                    created_at: new Date().toISOString()
                },
                {
                    id: '3',
                    name: 'Bacon Burger',
                    description: 'A savory burger topped with crispy bacon.',
                    price: 15.00,
                    stock: 1,
                    category_name: 'Food',
                    category_id: 1,
                    created_at: new Date().toISOString()
                },
                {
                    id: '4',
                    name: 'Veggie Burger',
                    description: 'A healthy veggie burger with fresh vegetables.',
                    price: 5.00,
                    stock: 1,
                    category_name: 'Food',
                    category_id: 1,
                    created_at: new Date().toISOString()
                },
                {
                    id: '5',
                    name: 'Chicken Burger',
                    description: 'A tasty chicken burger with a crispy patty.',
                    price: 20.00,
                    stock: 1,
                    category_name: 'Food',
                    category_id: 1,
                    created_at: new Date().toISOString()
                },
                {
                    id: '6',
                    name: 'Coca Cola',
                    description: 'A refreshing can of Coca Cola.',
                    price: 1.00,
                    stock: 1,
                    category_name: 'Drink',
                    category_id: 2,
                    created_at: new Date().toISOString()
                },
                {
                    id: '7',
                    name: 'Pepsi',
                    description: 'A refreshing can of Pepsi.',
                    price: 1.00,
                    stock: 1,
                    category_name: 'Drink',
                    category_id: 2,
                    created_at: new Date().toISOString()
                },
                {
                    id: '8',
                    name: 'Sprite',
                    description: 'A refreshing can of Sprite.',
                    price: 10.00,
                    stock: 1,
                    category_name: 'Drink',
                    category_id: 2,
                    created_at: new Date().toISOString()
                },
                {
                    id: '9',
                    name: 'Fanta',
                    description: 'A refreshing can of Fanta.',
                    price: 1.00,
                    stock: 1,
                    category_name: 'Drink',
                    category_id: 2,
                    created_at: new Date().toISOString()
                },
                {
                    id: '10',
                    name: 'Mountain Dew',
                    description: 'A refreshing can of Mountain Dew.',
                    price: 1.00,
                    stock: 1,
                    category_name: 'Drink',
                    category_id: 2,
                    created_at: new Date().toISOString()
                }
            ]
        },
        
        [ACTION_LOAD_SELECTED_PRODUCTS]() {
            return this.selectedProduct;
        },

        [ACTION_ADD_ORDER](product: IProductEntity) {

            const exists = this.selectedProduct.some((element: IProductEntity) => element.id === product.id);

            if (!exists) {
                this.selectedProduct.push(product);
                return
            }

            alert('Pedido já adicionado');
        },

        [ACTION_REMOVE_ORDER](product: IProductEntity) {
            const index = this.selectedProduct.findIndex((element: IProductEntity) => element.id === product.id);

            if (index !== -1) {
                this.selectedProduct.splice(index, 1);
                return
            }

            alert('Pedido não encontrado');
        }
    }
});