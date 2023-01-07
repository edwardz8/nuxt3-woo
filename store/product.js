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
        products: state => state.productsList,
        productById: state => (id) => {
            return state.productsList.find(prod => prod.id === id)
        }
    }
})