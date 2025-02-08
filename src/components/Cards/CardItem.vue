<template>
  <li class="cards-list__item">
    <img
      class="cards-list__img"
      :src="product.product_image"
      height=""
      width=""
      alt="foto dollor"
    />
    <div class="cards-list__card-content">
      <p class="cards-list__name">{{ product.product_name }}</p>

      <p class="cards-list__price">{{ product.product_price }}$</p>
    </div>
  </li>
</template>

<script setup>
defineProps(['product'])
</script>

<style lang="scss" scoped>
.cards-list__item {
  position: relative;
  width: 190px;
  height: 170px;
}
.cards-list__img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  margin: 0 auto;
}
.cards-list__card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 45px 10px 10px 10px;
  height: 110px;
  background: #ffffff;
  border-radius: 12px;
}
.cards-list__name {
  text-align: center;
}
.cards-list__price {
  text-align: right;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.285714px;
  color: #30c88f;
}
</style>
