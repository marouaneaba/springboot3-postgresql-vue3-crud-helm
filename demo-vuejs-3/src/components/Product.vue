<script setup lang="ts">

import {computed} from "vue";
import { useRoute } from 'vue-router'
import {choseProduct} from "@/stores/ChoseProduct";

const productId = computed(() => useRoute().params);

const store = choseProduct();


const updateCurrentProduct = () => {
  store.$patch({ productId: productId.value.id });
}

</script>

<template>
  <button @click="updateCurrentProduct()">
    {{productId}}
  </button>
</template>