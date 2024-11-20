<script setup>
import { store } from "@/store/store";
import { computed, onMounted } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import ProductItem from "./ProductItem.vue";

// Fetch products when the component is mounted
onMounted(() => {
  store.dispatch("fetchProducts");
});
const isLoading = computed(() => store.state.isLoading);
const products = computed(() => store.state.products);
</script>

<template>
  <!-- Display loading spinner while fetching products -->
  <div v-if="isLoading" class="text-center my-48">
    <PulseLoader />
  </div>
  <!-- Display product list when loading is complete -->
  <ul v-else class="divide-y divide-stone-200 px-2">
    <ProductItem
      v-for="product in products"
      :product="product"
      :key="product.id"
    />
  </ul>
</template>
