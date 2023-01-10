import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
    state: () => {
        return {
            productsList: null
        }
    },
    actions: {
        setProducts (payload) {
            this.productsList = payload 
        }
    },
    getters: {
        /* get all products */
        products: state => state.productsList,

        /* get single product */
        productById: state => (id) => {
            return state.productsList.find(prod => prod.id === id)
        }
    }
})