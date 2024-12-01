<template>
  <div>
    <ProductNavbarComponent />
  </div>
  <router-view />

</template>

<script setup lang="ts">
import ProductNavbarComponent from './presentation/components/ProductNavbarComponent.vue';

import { defineComponent, onMounted } from 'vue';

defineComponent({
  components: {
    ProductNavbarComponent
  }
});

</script>

<style></style>