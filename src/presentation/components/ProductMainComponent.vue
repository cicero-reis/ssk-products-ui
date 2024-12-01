<template>
  <div class="container-fluid mt-4 d-flex justify-content-center">
    <div class="row w-100">
      <!-- Main Content (Categories and Products) -->
      <div class="col">
        <!-- Categories Section -->
        <CategoryComponent />
        <!-- Products Section -->
        <ProductComponent />
      </div>
      <!-- Cart Aside -->
      <CartComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import CategoryComponent from "./CategoryComponent.vue";
import ProductComponent from "./ProductComponent.vue";
import CartComponent from "./CartComponent.vue";

export default defineComponent({
  name: "ProductMainComponent",
  components: {
    CategoryComponent,
    ProductComponent,
    CartComponent,
  },
  setup() {
    return {};
  },
});
</script>
