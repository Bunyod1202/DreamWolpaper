import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    order: [],
    totalPrice: 0,
  }),
  actions: {
    increment(product) {
      this.order.push(product)
      this.totalPrice += product.price
    },
    decrement(product) {
      this.order = this.order.filter((item) => item.id !== product.id)
      this.totalPrice -= product.price
    },
  },
})
