<script setup>
import { store } from "@/store/store";
import { onMounted } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import ProductItem from "./ProductItem.vue";

onMounted(() => {
  store.dispatch("fetchProducts"); // Fetch products using the Vuex action
});
</script>

<template>
  <!-- Showing Loading Spinner When Loading Is True -->
  <div v-if="store.state.isLoading" class="text-center my-48">
    <PulseLoader />
  </div>
  <ul v-else class="divide-y divide-stone-200 px-2">
    <ProductItem
      v-for="product in store.state.products"
      :product="product"
      :key="product.id"
    />
  </ul>
</template>
