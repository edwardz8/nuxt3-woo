<script setup lang="ts">
import useWpApi from "~/composables/useWpApi";
import { useProductStore } from "~/store/product";
import { useCartStore } from "~/store/cart";

const productStore = useProductStore();
const cartStore = useCartStore();
const products = ref([]);

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Home for Products",
    },
  ],
  titleTemplate: "Vue & WordPress & WooCommerce Headless Commerce",
});

const storeProducts = computed(() => productStore.productsList);

if (storeProducts.value) {
  products.value = storeProducts.value;
} else {
  const items = await useWpApi().getProducts();
  products.value = items.data;
}

const addToCart = async (prod: object) => {
  cartStore.addToCart(prod);
  console.log(prod, 'product')
};
</script>

<template>
  <main>
  <Header />
    <section class="container mx-auto py-16 px-2">
      <div class="grid sm:grid-cols-4 gap-5">
        <product-card
          v-for="prod in products"
          :key="prod.id"
          :title="prod.name"
          :excerpt="prod.short_description"
          :sale-price="prod.prices.sale_price"
          :regular-price="prod.prices.regular_price"
          :id="prod.id"
          :image="prod.images[0].thumbnail"
          @addProductToCart="addToCart(prod)"
        />
      </div>
    </section>
  </main>
</template>
