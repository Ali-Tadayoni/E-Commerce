<script setup>
import Cart from "@/components/Cart.vue";
import EmptyCart from "@/components/EmptyCart.vue";
import { store } from "@/store/store";
</script>

<template>
  <div v-if="store.state.cart.length">
    <Cart />
  </div>
  <div v-else>
    <EmptyCart />
  </div>
</template>
