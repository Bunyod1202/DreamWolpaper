<template>
  <li class="cards-list__item" :class="orderarr.includes(product.id) ? 'card-active' : ''">
    <img
      class="cards-list__img"
      :width="
        product.img_count === 3
          ? '227'
          : product.img_count === 2
            ? '190'
            : product.img_count === 1
              ? '83'
              : '0'
      "
      :height="
        product.img_count === 3
          ? '185'
          : product.img_count === 2
            ? '181'
            : product.img_count === 1
              ? '164'
              : '0'
      "
      :src="product.image"
      alt="foto dollor"
    />
    <div class="cards-list__card-content">
      <p class="cards-list__name">{{ product.name }}</p>
      <div class="card-wrapper">
        <p class="cards-list__price">{{ product.price }}$</p>
        <button class="btn-cart" rounded @click="addToCart(product)">
          <img class="btn-cart__green" src="../../assets/shopping-cart.png" alt="" />
          <img class="btn-cart__white" src="../../assets/shopping-cart white.png" alt="" />
        </button>
      </div>
    </div>
  </li>
</template>

<script setup>
defineProps(['product', 'order'])
import { useCounterStore } from 'stores/counter'
import { computed } from 'vue'

const orderarr = computed(() => {
  return counterStore.order.map((item) => item.id)
})

const counterStore = useCounterStore()

function addToCart(product) {
  if (counterStore.order.find((item) => item.id === product.id)) {
    counterStore.decrement(product)
    return
  }
  counterStore.increment(product)
}
</script>

<style lang="scss" scoped>
.card-active {
  transition: all 0.3s ease;

  .cards-list__img {
    scale: 1;
    transition: all 0.3s ease;
  }
  .btn-cart__green {
    display: none;
  }
  .btn-cart__white {
    display: block;
  }
  .cards-list__card-content {
    border-bottom: 5px solid #30c88f;
    transition: all 0.3s ease;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    background-color: #30c88f;
    box-shadow:
      rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
  .cards-list__name {
    color: #fff;
  }
  .cards-list__price {
    color: #fff;
  }
}
.cards-list__item {
  position: relative;
  width: 247px;
  height: 254px;
  transition: all 0.3s ease;
}
.cards-list__name {
  margin: 5px auto;
}
.cards-list__price {
  margin: 5px 0;
}
.btn-cart__green {
  display: block;
}
.btn-cart__white {
  display: none;
}
.cards-list__item:hover {
  transition: all 0.3s ease;

  .cards-list__img {
    scale: 1.08;
    transition: all 0.3s ease;
  }
  .btn-cart__green {
    display: none;
  }
  .btn-cart__white {
    display: block;
  }
  .cards-list__card-content {
    transition: all 0.3s ease;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    background-color: #30c88f;
    box-shadow:
      rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
  .cards-list__name {
    color: #fff;
  }
  .cards-list__price {
    color: #fff;
  }
}
.card-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-cart {
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
}
.cards-list__img {
  transition: all 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  margin: 0 auto;
}
.cards-list__card-content {
  transition: all 0.3s ease;
  box-shadow:
    rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 48px 10px 10px 10px;
  height: 116px;
  background: #ffffff;
  border-radius: 12px;
}
.cards-list__name {
  text-align: center;
  font-size: 16px;
}
.cards-list__price {
  text-align: right;

  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.285714px;
  color: #30c88f;
}
</style>
