<script lang="ts" setup>
import useWpApi from "~/composables/useWpApi";
import { useCartStore } from "~/store/cart";
import { Product } from "~~/types/Product";

// import { useProductStore } from "~/store/product";
// const productStore = useProductStore();

const cartStore = useCartStore();
const product = ref({});

const route = useRoute();

const items = await useWpApi().getProduct(route.params.id);
product.value = items.data;

/* method */
const addProductToCart = (product: Product) => {
  cartStore.addToCart(product);
};
</script>

<template>
  <div class="col-span-1 group overflow-hidden">
    <div class="grid__image h-[260px] w-full relative overflow-hidden">
      <img :src="product.images[0].thumbnail" :alt="product.name"
        class="absolute object-cover w-full h-full group-hover:scale-110 duration-300" />
    </div>
    <div class="p-5 flex items-center justify-between">
      <div>
        <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
        <div v-if="product.short_description" class="grid__content-excerpt mb-2 text-sm text-clip overflow-hidden"
          v-html="product.short_description"></div>

        <div>
          <p class="text-xl text-primary font-semibold">
            $ {{ product.prices.sale_price }}
          </p>
          <p class="text-base text-gray-400 line-through"
            v-if="product.prices.sale_price !== product.prices.regular_price">
            $ {{ product.prices.regular_price }}
          </p>
        </div>
      </div>

      <!-- Button -->
      <button v-if="product.id" @click="addProductToCart(product)"
        class="p-2 bg-stone-900 hover:bg-slate-600 rounded text-white inline-flex items-center">
        Add to Cart
      </button>

    </div>
  </div>
</template>
