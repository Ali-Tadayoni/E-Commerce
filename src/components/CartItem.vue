<script setup>
import { defineProps } from "vue";
import { store } from "@/store/store";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const handleIncrease = (id) => {
  store.commit("increaseItemQuantity", id);
};
const handleDecrease = (id) => {
  store.commit("decreseItemQuantity", id);
};

const handleDelete = (id) => {
  store.commit("removeFromCart", id);
};
</script>

<template>
  <li class="py-3 sm:flex sm:items-center sm:justify-between">
    <img :src="props.item.image[0]" :alt="props.item.title" class="h-20" />
    <div class="flex grow flex-col pt-0.5">
      <p class="mb-1 sm:mb-0">{{ props.item.title }}</p>
      <div class="flex items-center justify-between sm:gap-6">
        <p class="mb-1 sm:mb-0">&times;{{ props.item.quantity }}</p>
        <p class="text-sm font-bold">${{ props.item.totalPrice }}</p>
        <div className="flex items-center gap-2 md:gap-3">
          <button
            @click="handleDecrease(props.item.id)"
            class="button-style button-style:focus px-2.5 py-1 md:px-3.5 md:py-2 text-sm"
          >
            -
          </button>
          <span class="text-sm font-medium">{{ props.item.quantity }} </span>
          <button
            @click="handleIncrease(props.item.id)"
            class="button-style button-style:focus px-2.5 py-1 md:px-3.5 md:py-2 text-sm"
          >
            +
          </button>
        </div>
        <button
          @click="handleDelete(props.item.id)"
          class="button-style button-style:focus px-4 py-2 md:px-5 md:py-2.5 text-xs"
        >
          Delete
        </button>
      </div>
    </div>
  </li>
</template>
