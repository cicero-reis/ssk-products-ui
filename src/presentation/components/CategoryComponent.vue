<template>
  <div class="container mb-4">
    <h2 class="text-center">Faça seu Pedido</h2>
    <br />
    <div class="row text-center mt-3">
      <div class="col-md-3 mb-3">
        <div class="category p-3 rounded">
          <h3>Burgers</h3>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="category p-3 rounded">
          <h3>Bebidas</h3>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="category p-3 rounded">
          <h3>Salad</h3>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="category p-3 rounded">
          <h3>Salad</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoryComponent",
  setup() {
    return {};
  },
});
</script>
