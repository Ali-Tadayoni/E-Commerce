<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
const handleSubmit = () => {
  toast.success("Your Order Submited Successfuly");
  // Placeholder for additional functionality later.🚀
};
</script>

<template>
  <section class="bg-blue-50">
    <div class="container m-auto max-w-2xl py-24">
      <RouterLink
        to="/"
        class="text-sm text-blue-500 hover:text-blue-600 hover:underline"
        >&larr; Back To Menu</RouterLink
      >
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">
            Ready to order? Let‘s go😎!
          </h2>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Your Name..."
              required
              aria-label="Full Name"
            />
          </div>

          <div class="mb-4">
            <label
              for="contact_email"
              class="block text-gray-700 font-bold mb-2"
              >Email</label
            >
            <input
              type="email"
              id="contact_email"
              name="contact_email"
              class="border rounded w-full py-2 px-3"
              placeholder="Email Address..."
              required
              aria-label="Email Address"
            />
          </div>
          <div class="mb-4">
            <label
              for="contact_phone"
              class="block text-gray-700 font-bold mb-2"
              >Phone Number</label
            >
            <input
              type="tel"
              id="contact_phone"
              name="contact_phone"
              class="border rounded w-full py-2 px-3"
              placeholder="Your Phone..."
              aria-label="Phone Number"
            />
          </div>

          <div class="mb-4">
            <label for="Address" class="block text-gray-700 font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              id="Address"
              name="Address"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Your Address"
              required
              aria-label="Address"
            />
          </div>

          <div>
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Order Now
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
