<template>
  <div class="why-easybank">
    <div class="why-easybank__content content">
      <h2 class="content__title">Discover Our Latest Trendsetting Collections</h2>
      <p class="content__text">
        📱 Explore our newest collection of stunning phone wallpapers! From sleek minimalistic
        designs to vibrant artistic backgrounds, find the perfect style to personalize your
        device.✨
      </p>
    </div>
    <ul class="why-easybank__list">
      <CardItem v-for="item in ProductsList" :key="item" :product="item" />
    </ul>
  </div>
</template>

<script setup>
import CardItem from './CardItem.vue'
import ProductsList from 'src/db/ProductsList.json'
</script>

<style lang="scss" scoped>
.why-easybank__content {
  max-width: 827px;
}
.why-easybank__list {
  list-style: none;
  gap: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
}
.content__title {
  font-weight: 100;
  font-size: 40px;
  line-height: 64px;
  letter-spacing: -0.714286px;
  color: #2d314d;
  margin: 0;
}
.content__text {
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.28125px;
  color: #9597a5;
  margin: 16px 0 0 0;
}
.why-easybank__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  list-style: none;

  margin: 72px 0 0 0;
  padding: 0;
}
@media only screen and (max-width: 1100px) {
  .why-easybank__content {
    max-width: 327px;
    text-align: center;
    margin: 0 auto;
  }
  .why-easybank__list {
    gap: 10px;
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .content__title {
    max-width: 300px;
    margin: 0 auto 14px auto;
    font-weight: 100;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.571429px;
  }
  .content__text {
    font-size: 15px;
    line-height: 25px;
    letter-spacing: -0.234375px;
    margin: 0 auto;
  }
  .why-easybank__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    list-style: none;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 72px 0 0 0;
    padding: 0;
  }
}
@media only screen and (max-width: 613px) {
  .why-easybank__content {
    max-width: 327px;
    text-align: center;
    margin: 0 auto;
  }
  .why-easybank__list {
    gap: 10px;
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .content__title {
    max-width: 300px;
    margin: 0 auto 14px auto;
    font-weight: 100;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.571429px;
  }
  .content__text {
    font-size: 15px;
    line-height: 25px;
    letter-spacing: -0.234375px;
    margin: 0 auto;
  }
  .why-easybank__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    list-style: none;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 72px 0 0 0;
    padding: 0;
  }
}
@media only screen and (max-width: 613px) {
  .why-easybank__list {
    gap: 10px;
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
