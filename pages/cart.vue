<script setup>
import { useCartStore } from "~/store/cart";

const cartStore = useCartStore();

const cartItems = computed(() => {
  return cartStore.cartItems;
});

const total = computed(() => {
  let total = 0;
  if (cartStore.cartItems) {
    cartStore.cartItems.forEach((item) => {
      total += item.prices.sale_price * item.quantity;
    });
  }
  return total;
});
</script>

<template>
  <div class="xl:px-32 lg:px-16 md:px-8 px-4 pb-16 mt-24 pt-4">
    <div class="bg-white border border-gray-200 p-4 rounded w-full mx-auto">
      <div class="flex justify-between mb-8">
        <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</h4>
        <button
          @click="cartStore.emptyCart()"
          class="ml-4 bg-stone-900 hover:bg-red-600 text-stone-100 font-semibold hover:text-white py-2 px-2 hover:border-transparent rounded"
        >
          Clear Cart
        </button>
      </div>
      <div class="space-y-2" v-if="cartItems">
        <template v-for="item in cartItems" :key="item.id">
          <div class="grid grid-cols-4">
            <div class="flex gap-4 items-center">
              <div class="w-16 bg-gray-50">
                <img
                  class="h-16 object-contain w-full"
                  :src="item.images[0].thumbnail"
                  alt=""
                />
              </div>
              <div>
                <h5 class="text-gray-800 font-medium">{{ item.name }}</h5>
              </div>
            </div>
            <div class="justify-self-end">
              <p class="text-gray-800 font-medium">${{ item.prices.sale_price }}</p>
            </div>

            <div class="flex justify-end">
              <p class="text-gray-800 font-medium text-lg">
                {{ item.quantity }} <span class="text-gray-600 text-base">x</span>
              </p>
            </div>
            <div class="justify-self-end">
              <p class="text-gray-800 font-medium">
                {{ (item.prices.sale_price * item.quantity).toFixed(2) }}
              </p>
            </div>
          </div>
        </template>
      </div>

      <div
        class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas"
      >
        <p>shipping</p>
        <p>Free</p>
      </div>

      <div class="flex justify-between text-gray-800 font-medium py-3 uppercas">
        <p class="font-semibold">Total</p>
        <p>{{ total }}</p>
      </div>

      <NuxtLink
        to="/checkout"
        class="block w-full py-3 px-4 text-center text-white bg-zinc-800 border border-primary rounded-md hover:bg-zinc-900 transition font-medium"
        >Place order</NuxtLink
      >
    </div>
  </div>
  <!-- ./wrapper -->
</template>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}
</style>
