import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const choseProduct = defineStore("choseProduct", () => {

    const productName = ref('');
    const productId = ref('');
    const concatProduct = computed(() => {
        return `${productName} ${productId}`;
    })

    const clearChose = () => {
        productName.value = '';
        productId.value = '';
    }

    return { productName, productId, concatProduct, clearChose };
})