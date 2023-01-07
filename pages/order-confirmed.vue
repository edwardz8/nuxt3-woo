<template>
  <div>
    <div class="xl:px-32 lg:px-16 md:px-8 px-4 pb-16 mt-24 pt-4 gap-6 bg-white">
      <div class="flex justify-center item-center space-y-2 flex-col">
        <h1
          class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 text-center"
        >
          Thank you. Your order has been placed.
        </h1>
        <div class="flex justify-center gap-4 items-center">
          <NuxtLink
            to="/"
            class="py-2 px-3 rounded-md uppercase text-sm text-white bg-primary"
            >Continue Shopping</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
