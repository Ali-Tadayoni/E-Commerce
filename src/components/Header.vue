<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header
    class="flex items-center justify-evenly border-b border-stone-200 bg-blue-400 px-4 py-3 uppercase sm:px-6"
  >
    <RouterLink to="/" class="flex items-center gap-3">
      <span class="inline-block">E-COMMERCE WEBSITE</span>
      <i class="pi pi-home text-xl"></i>
    </RouterLink>
    <div className="text-md font-demibold flex items-center gap-3 ">
      <span>Cart</span>
      <RouterLink to="/cart">
        <i class="pi pi-shopping-cart text-2xl"></i>
      </RouterLink>
    </div>
  </header>
</template>
