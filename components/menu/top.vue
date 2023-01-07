<script setup>
import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();

/** ========= COMPUTED =========== */

const cartLength = computed(() => {
  return cartStore.cartItems?.length;
});

onMounted(() => {
  cartStore.fetchCart();
});
</script>

<template>
  <nav class="bg-zinc-800 text-white py-5 px-5">
    <div class="container flex justify-between">
      <NuxtLink to="/" class="logo text-xl font-bold">WP + Nuxt Blog</NuxtLink>
      <ul class="inline-flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/categories">Categories</NuxtLink></li>
        <NuxtLink
          to="/cart"
          class="text-center text-gray-700 hover:text-primary transition relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#fff"
            class="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
            />
          </svg>
          <div
            v-if="cartLength"
            class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-black bg-white text-sm"
          >
            {{ cartLength }}
          </div>
        </NuxtLink>
      </ul>
    </div>
  </nav>
</template>
