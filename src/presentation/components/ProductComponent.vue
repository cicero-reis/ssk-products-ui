<template>
    <div class="container mb-4">
        <div class="row">
            <div class="col-md-2 col-sm-6" v-for="product in store.products" :key="product.id">
                <div class="card product-card" data-name={{product.name}} data-price="{{ product.price }}">
                    <img src="../../assets/image/double-cb.png" class="card-img-top" alt="Big Mac">
                    <div class="card-body text-center">
                        <p class="card-title">{{ product.name }}</p>
                        <p class="card-text">${{ product.price }}</p>
                        <button class="btn btn-danger add-to-cart" @click="addToOrder(product)">Adicionar</button>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, onMounted } from 'vue';
import { productStore } from '../store/productStore';
import { ACTION_LOAD_PRODUCTS, ACTION_ADD_ORDER } from '../store/actions';
import IProductEntity from '../../domain/entities/IProductEntity';

export default defineComponent({

    name: 'ProductComponent',    

    setup() {
        
        const store = productStore();

        const addToOrder = (product: IProductEntity) => {
            store[ACTION_ADD_ORDER](product);
        }
       
        onMounted( async () => {
            await store[ACTION_LOAD_PRODUCTS]();
        });


        return {
            store,
            addToOrder
        }
    }
});



</script>