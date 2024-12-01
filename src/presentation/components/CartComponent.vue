<template>
  <aside id="cart-aside" class="col-lg-3">
    <div class="aside-header">
      <h5>Seu Pedido</h5>
    </div>
    <ul class="list-group list-product my-3">
      <li
        class="list-group-item cart-item"
        v-for="product in store.selectedProduct"
        :key="product.id"
      >
        <span class="cart-item-name">{{ product.name }}</span>
        <div class="cart-item-quantity">
          <span class="quantity-controls" @click="decreaseQuantity(product)"
            >&#8722;</span
          >
          <span>{{ product.stock }}</span>
          <span class="quantity-controls" @click="increaseQuantity(product)"
            >&#43;</span
          >
        </div>
        <span class="cart-item-price"
          >${{ (product.price * product.stock).toFixed(2) }}</span
        >
        <span
          class="cart-item-remove fas fa-trash fa-sm"
          @click="removeToOrder(product)"
        ></span>
      </li>
    </ul>
    <div class="d-flex justify-content-between mt-3">
      <strong>Total:</strong>
      <span class="cart-total">$ {{ total.toFixed(2) }}</span>
    </div>
    <button class="btn btn-danger w-100 mt-3">Finalizar Pedido</button>
  </aside>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { productStore } from "../store/productStore";
import {
  ACTION_LOAD_SELECTED_PRODUCTS,
  ACTION_REMOVE_ORDER,
} from "../store/actions";
import IProductEntity from "../../domain/entities/IProductEntity";

export default defineComponent({
  name: "CartComponent",

  setup() {
    const store = productStore();

    onMounted(() => {
      store[ACTION_LOAD_SELECTED_PRODUCTS]();
    });

    const total = computed(() =>
      store.selectedProduct.reduce(
        (acc, product) => acc + product.price * product.stock,
        0
      )
    );

    const removeToOrder = (product: IProductEntity) => {
      store[ACTION_REMOVE_ORDER](product);
    };

    const increaseQuantity = (product: { stock: number }) => product.stock++;

    const decreaseQuantity = (product: { stock: number }) => {
      if (product.stock > 1) {
        product.stock--;
      }
    };

    return {
      store,
      total,
      increaseQuantity,
      decreaseQuantity,
      removeToOrder,
    };
  },
});
</script>
