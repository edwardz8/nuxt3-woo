<script setup>
import { useCartStore } from "~/store/cart";
import useWpApi from "~/composables/useWpApi";
const cartStore = useCartStore();
const router = useRouter();

/* data */
const first_name = ref("");
const last_name = ref("");
const email = ref("");
const phone = ref("");
const company = ref("");
const country = ref("");
const address1 = ref("");
const city = ref("");
const postal_code = ref("");
const loading = ref(false);

/* methods */

const checkout = async () => {
  loading.value = true;
  await useWpApi().postOrder({
    payment_method: "cod",

    shipping: {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      phone: phone.value,
      company: company.value,
      address1: address1.value,
      city: city.value,
      postal_code: postal_code.value,
      country: "US",
    },
    line_items: lineItems.value,
  });
  loading.value = false;

  router.push("/order-confirmed");
};

/* computed props */
const cartItems = computed(() => {
  return cartStore.cartItems;
});

const lineItems = computed(() => {
  return [...cartStore.cartItems].map((item) => {
    return { product_id: item.id, quantity: item.quantity };
  });
});

const total = computed(() => {
  let total = 0;
  cartStore.cartItems.forEach((item) => {
    total += item.prices.sale_price * item.quantity;
  });
  return total;
});
</script>

<template>
  <!-- wrapper -->
  <div
    class="xl:px-32 lg:px-16 md:px-8 px-4 grid grid-cols-12 items-start pb-16 mt-24 pt-4 gap-6"
  >
    <div class="col-span-8 border border-gray-200 p-4 rounded">
      <h3 class="text-lg font-medium capitalize mb-4">Checkout</h3>
      <div class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="first-name" class="text-gray-600"
              >First Name <span class="text-primary">*</span></label
            >
            <input
              type="text"
              name="first-name"
              id="first-name"
              v-model="first_name"
              class="input-box border-gray-400 rounded px-2 focus:outline-none border block w-full h-10"
            />
          </div>
          <div>
            <label for="last-name" class="text-gray-600"
              >Last Name <span class="text-primary">*</span></label
            >
            <input
              type="text"
              name="last-name"
              id="last-name"
              v-model="last_name"
              class="input-box border-gray-400 rounded px-2 focus:outline-none border block w-full h-10"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="email" class="text-gray-600"
              >Email <span class="text-primary">*</span></label
            >
            <input
              type="email"
              name="email"
              id="email"
              v-model="email"
              class="input-box border-gray-400 rounded px-2 focus:outline-none border block w-full h-10"
            />
          </div>
          <div>
            <label for="phone" class="text-gray-600"
              >Phone <span class="text-primary">*</span></label
            >
            <input
              type="text"
              name="phone"
              id="phone"
              v-model="phone"
              class="input-box border-gray-400 rounded px-2 focus:outline-none border block w-full h-10"
            />
          </div>
        </div>
        <div>
          <label for="company" class="text-gray-600">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            v-model="company"
            class="input-box border-gray-400 rounded px-2 focus:outline-none border block w-full h-10"
          />
        </div>
        <div>
          <label for="country" class="text-gray-600">Country/Region</label>
          <input
            type="text"
            name="country"
            id="country"
            v-model="country"
            class="input-box border-gray-400 rounded px-2 focus:outline-none border block w-full h-10"
          />
        </div>
        <div>
          <label for="address" class="text-gray-600">Street address</label>
          <input
            type="text"
            name="address"
            id="address"
            v-model="address1"
            class="input-box border-gray-400 rounded px-2 focus:outline-none border block w-full h-10"
          />
        </div>
        <div>
          <label for="city" class="text-gray-600">City</label>
          <input
            type="text"
            name="city"
            id="city"
            v-model="city"
            class="input-box border-gray-400 rounded px-2 focus:outline-none border block w-full h-10"
          />
        </div>
        <div>
          <label for="postal-code" class="text-gray-600">Postal Code</label>
          <input
            type="text"
            name="postal-code"
            id="postal-code"
            v-model="postal_code"
            class="input-box border-gray-400 rounded px-2 focus:outline-none border block w-full h-10"
          />
        </div>
      </div>
    </div>

    <div class="col-span-4 bg-white border border-gray-200 p-4 rounded w-full mx-auto">
      <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</h4>
      <div class="space-y-2">
        <TransitionGroup name="list">
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
                  {{ item.quantity }}
                  <span class="text-gray-600 text-base">x</span>
                </p>
              </div>
              <div class="justify-self-end">
                <p class="text-gray-800 font-medium">
                  {{ (item.prices.sale_price * item.quantity).toFixed(2) }}
                </p>
              </div>
            </div>
          </template>
        </TransitionGroup>
      </div>

      <div
        class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase"
      >
        <p>subtotal</p>
        <!-- <p>{{ subTotal }}</p> -->
      </div>

      <div
        class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase"
      >
        <p>shipping</p>
        <p>Free</p>
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

      <button
        @click="checkout"
        class="block w-full py-3 px-4 text-center text-white bg-zinc-800 border border-primary rounded-md hover:bg-zinc-900 transition font-medium"
      >
        <template v-if="loading"> Loading </template>
        <template v-else> Place order </template>
      </button>
    </div>
  </div>
</template>
