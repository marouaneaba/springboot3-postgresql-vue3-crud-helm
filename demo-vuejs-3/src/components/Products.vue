<script setup lang="ts">
import {ref} from "vue";
import ProductData from "@/model/ProductData.ts";
import Title from "@/components/Title.vue";

//const props = defineProps<{products: ProductData}>();
//console.log(props);
const showModal = ref<boolean>(false);

const productsList = [
  {id: 1, name: 'product1'},
  {id: 2, name: 'product2'},
  {id: 3, name: 'product3'},
]


</script>

<template>
  <main>

    <Title></Title>

    <router-link :to="{name: 'products'}">List products</router-link> <br/>
    <button @click="showModal = !showModal" class="btn btn-primary">Open modal</button>

    <div v-for="{name, id} in productsList">
      <router-link :to="{ name: 'products.id', params: {id} }">{{name}}</router-link>
    </div>
    <!-- configurer par route /products/routeConfiguration -->
    <router-view></router-view>
    <p>{{showModal}}</p>
    <p>{{ $t('utilisateur') }}</p>

    <teleport to="body">
      <div v-if="showModal" class="modal fade show" tabindex="-1" style="display: block; background-color: rgba(0, 0, 0, 0.5);">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" @click="showModal = !showModal" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" @click="showModal = !showModal" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </teleport>

  </main>

</template>

<style scoped>
.modal.fade.show {
  display: block !important;
}
</style>
