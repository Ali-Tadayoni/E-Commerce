<script setup>
import Cart from "@/components/Cart.vue";
import EmptyCart from "@/components/EmptyCart.vue";
import { computed } from "vue";
import { store } from "@/store/store";

const hasItemsInCart = computed(() => store.state.cart.length > 0);
</script>

<template>
  <!-- Render Cart if the cart has items -->
  <Cart v-if="hasItemsInCart" />
  <!-- Render EmptyCart if the cart is empty -->
  <EmptyCart v-else />
</template>
