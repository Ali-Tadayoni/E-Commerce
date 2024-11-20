<script setup>
import { defineProps } from "vue";
import { store } from "@/store/store";
const props = defineProps({
  item: Object,
});

const handleIncrease = (id) => {
  store.commit("increaseItemQuantity", id);
};
const handleDecrese = (id) => {
  store.commit("decreseItemQuantity", id);
};

const handleDelete = (id) => {
  store.commit("removeFromCart", id);
};
</script>

<template>
  <li class="py-3 sm:flex sm:items-center sm:justify-between">
    <img :src="props.item.image" :alt="props.item.title" class="h-20" />
    <div class="flex grow flex-col pt-0.5">
      <p class="mb-1 sm:mb-0">{{ props.item.title }}</p>
      <div class="flex items-center justify-between sm:gap-6">
        <p class="mb-1 sm:mb-0">&times;{{ props.item.quantity }}</p>
        <p class="text-sm font-bold">${{ props.item.totalPrice }}</p>
        <div className="flex items-center gap-2 md:gap-3">
          <button
            @click="handleDecrese(item.id)"
            class="focus: focus: focus: inline-block rounded-full bg-blue-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-blue-300 focus:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2 text-sm"
          >
            -
          </button>
          <span class="text-sm font-medium">{{ props.item.quantity }} </span>
          <button
            @click="handleIncrease(item.id)"
            class="focus: focus: focus: inline-block rounded-full bg-blue-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-blue-300 focus:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 md:px-3.5 md:py-2 text-sm"
          >
            +
          </button>
        </div>
        <Button
          @click="handleDelete(item.id)"
          class="focus: focus: focus: inline-block rounded-full bg-blue-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-blue-300 focus:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs"
        >
          Delete
        </Button>
      </div>
    </div>
  </li>
</template>
