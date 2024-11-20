<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header
    class="flex items-center justify-around border-b border-stone-200 bg-blue-400 px-4 py-3 uppercase sm:px-6"
  >
    <RouterLink to="/">E-COMMERCE WEBSITE</RouterLink>
    <div className=" text-sm font-demibold flex items-center gap-3 ">
      <span>Cart</span>
      <RouterLink to="/cart">
        <i class="pi pi-shopping-cart text-xl"></i>
      </RouterLink>
    </div>
  </header>
</template>
