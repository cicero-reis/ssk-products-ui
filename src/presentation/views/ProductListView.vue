<template> 
    <ProductMainComponent />
</template>

<script lang="ts">

import { defineComponent, onMounted } from 'vue';
import ProductMainComponent from '../components/ProductMainComponent.vue';

export default defineComponent({

    name: 'ProductListView',

    components: {
        ProductMainComponent
    },
});
</script>