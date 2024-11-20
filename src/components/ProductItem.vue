<script setup>
import { store } from "@/store/store";
import { defineProps, computed } from "vue";
import { useToast } from "vue-toastification";
const props = defineProps({
  product: Object,
});

const toast = useToast();

// Compute whether the product is already in the cart
const isAdded = computed(() => {
  return store.state.cart.some((item) => item.id === props.product.id);
});

const addToCartHandler = () => {
  let cartProduct = {
    id: props.product.id,
    title: props.product.title,
    unitPrice: props.product.price,
    quantity: 1,
    totalPrice: props.product.price,
    image: props.product.images,
  };
  store.commit("addToCart", cartProduct);
  toast.success("Added to cart successfully");
};
const removeFromCartHandler = (id) => {
  store.commit("removeFromCart", id);
  toast.info("Removed from cart successfully");
};
</script>

<template>
  <li className="flex gap-4 py-2">
    <img
      :src="props.product.images[0]"
      :alt="props.product.title"
      class="h-24"
    />
    <div className="flex grow flex-col pt-0.5">
      <p className="font-medium">{{ props.product.title }}</p>
      <div className="mt-auto flex items-center justify-between">
        <p className="text-sm">${{ props.product.price }}</p>

        <!-- Button to add/remove from the cart -->
        <button
          v-if="!isAdded"
          @click="addToCartHandler"
          class="button-style button-style:focus px-4 py-2 md:px-5 md:py-2.5"
        >
          Add To Cart
        </button>
        <button
          v-else
          @click="removeFromCartHandler(props.product.id)"
          class="button-style button-style:focus px-4 py-2 md:px-5 md:py-2.5"
        >
          Delete
        </button>
      </div>
    </div>
  </li>
</template>
