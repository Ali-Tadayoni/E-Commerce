<script setup>
import { computed } from "vue";

import { RouterLink } from "vue-router";
import { store } from "@/store/store";
import CartItem from "./CartItem.vue";

const totalCartQuantity = computed(() => store.getters.getTotalCartQuantity);
const totalCartPrice = computed(() => {
  const total = store.getters.getTotalCartPrice;
  return parseFloat(total.toFixed(1));
});

const clearCartHandler = () => {
  store.commit("clearCart");
};
</script>

<template>
  <div className="px-4 py-3">
    <RouterLink
      to="/"
      class="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >&larr; Back To Menu</RouterLink
    >

    <h2 className="mt-7 text-xl font-semibold">Your cart</h2>

    <ul className="mt-3 divide-y divide-stone-200 border-b">
      <CartItem v-for="item in store.state.cart" :key="item.id" :item="item" />
    </ul>

    <div className="mt-6 flex items-center justify-between">
      <div class="space-x-2">
        <RouterLink
          to="/checkout"
          class="focus: focus: focus: inline-block rounded-full text-sm bg-blue-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-blue-300 focus:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4"
        >
          Check Out
        </RouterLink>

        <Button
          @click="clearCartHandler"
          class="focus: focus: focus: inline-block border-2 border-stone-300 text-sm rounded-full bg-transparent font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5"
        >
          Clear Cart
        </Button>
      </div>
      <div class="flex items-center gap-6">
        <span
          class="inline-block border-2 border-stone-300 rounded-full font-semibold px-4 py-3 md:px-6 md:py-4"
          >{{ totalCartQuantity }} Product</span
        >
        <span
          class="inline-block border-2 border-stone-300 rounded-full font-semibold px-4 py-3 md:px-6 md:py-4"
        >
          ${{ totalCartPrice }}
        </span>
      </div>
    </div>
  </div>
</template>
