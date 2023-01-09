<script setup lang="ts">
import BannerImage from "~/assets/img/faux-image-5.jpg";
</script>

<template>
  <div
    class="bg-cover bg-no-repeat bg-center py-14 xl:px-24 lg:px-32 md:px-18 px-12 opacity-80"
    :style="`background-image: url(${BannerImage});`">
    <div class="container">
      <h1 class="text-6xl text-black font-medium mb-4 capitalize drop-shadow-lg">
        best faux collection for <br />
        home decoration
      </h1>
      <p class="text-lg">
        A headless WordPress and WooCommerce solution for e-commerce sites. <br />
        This was built using Nuxt and Vue 3 and Pinia.
      </p>
      <div class="mt-12">
         <NuxtLink class="p-2 bg-black rounded text-white inline-flex items-center hover:bg-slate-800"
          to="/"
          >Shop Now
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
      </div>
    </div>
  </div>
  <!-- ./banner -->
</template>
