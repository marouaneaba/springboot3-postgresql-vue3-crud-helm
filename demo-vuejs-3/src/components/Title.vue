<script setup lang="ts">
import {choseProduct} from "@/stores/ChoseProduct.ts";

const store = choseProduct()
</script>

<template>
    <h1>Title</h1>
    <h1>{{ store.productName }}</h1>
    <h1>{{ store.productId }}</h1>
</template>

<style scoped>

</style>