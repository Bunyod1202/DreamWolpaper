<template>
  <li class="cards-list__item">
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
      :src="product.product_image"
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
  width: 247px;
  height: 254px;
  transition: all 0.3s ease;
}
.cards-list__item:hover {
  transition: all 0.3s ease;
  cursor: pointer;
  .cards-list__img {
    scale: 1.08;
    transition: all 0.3s ease;
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
