<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="mt-40 flex flex-col items-center justify-center gap-3">
    <RouterLink
      to="/"
      class="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >&larr; go back home
    </RouterLink>

    <p class="text-center font-semibold">
      Your cart is still empty. Start adding some thing :)
    </p>
  </section>
</template>
