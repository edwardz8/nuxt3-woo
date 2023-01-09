import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
    state: () => {
        return {
            cartList: []
        }
    },
    actions: {
        addToCart(payload) {
            const index = this.cartList.findIndex((item) => item.id === payload.id)
            if (index > -1) {
                this.cartList[index] = {
                    ...payload,
                    quantity: this.cartList[index].quantity+1
                }
            } else {
                this.cartList.push({ ...payload, quantity: 1 })
            }
            localStorage.cart = JSON.stringify(this.cartList)
        },

        /* FETCH CART */
        fetchCart() {
            this.cartList = localStorage.cart ? JSON.parse(localStorage.cart) : []
        },

        /* EMPTY CART */
        emptyCart() {
            this.cartList = []
            localStorage.removeItem('cart')
        }
    },

    /* GETTERS */
    getters: {
        cartItems: (state) => state.cartList,
      }
})