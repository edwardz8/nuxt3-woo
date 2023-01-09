<script lang="ts" setup>
const emit = defineEmits(["addProductToCart"]);

defineProps<{
  title: string;
  excerpt?: string;
  image?: string;
  id?: number;
  salePrice?: string;
  regularPrice?: string;
}>();

const addProductToCart = () => {
  emit("addProductToCart");
};
</script>

<template>
  <div class="container mx-auto shadow-xl col-span-1 group overflow-hidden rounded">
    <div class="grid__image h-[260px] w-full relative overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="absolute object-cover w-full h-full group-hover:scale-110 duration-300"
      />
    </div>
    <div class="p-5">
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <div
        v-if="excerpt"
        class="grid__content-excerpt mb-2 text-sm text-clip overflow-hidden"
        v-html="excerpt"
      ></div>
      <div class="flex gap-4">
        <p class="text-xl text-primary font-semibold">
          ${{ salePrice }}
        </p>
        <p class="text-base text-gray-400 line-through" v-if="salePrice !== regularPrice">
          ${{ regularPrice }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <NuxtLink
          v-if="id"
          class="border p-2 bg-black rounded border-b-2 text-white inline-flex items-center"
          :to="`/products/${id}`"
          >View
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 ml-1 group-hover:ml-2 duration-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </NuxtLink>
        <button
          v-if="id"
          @click="addProductToCart"
          class="border p-2 bg-black rounded border-b-2 text-white inline-flex items-center"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>
