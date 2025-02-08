<template>
  <li class="latest-articles__list-item">
    <img :src="category.category_image" height="" width="" alt="foto dollor" />
    <div class="latest-articles__card-content">
      <p class="latest-articles__name">Item length: 100</p>
      <h3 class="latest-articles__card-title">
        <a href="#"> {{ category.category_name }}</a>
      </h3>
      <p class="latest-articles__text">
        {{ category.category_description }}
      </p>
    </div>
  </li>
</template>

<script setup>
defineProps(['category'])
</script>

<style lang="scss" scoped>
.latest-articles__list-item {
  overflow: hidden;
  position: relative;
  max-width: 255px;
  background-color: #fff;
  border-radius: 12px;
  max-height: 395px;
  cursor: pointer;
}
.latest-articles__list-item:hover {
  .latest-articles__card-content {
    transform: translateY(0);
    transition: all 0.3s ease;
  }
}
.latest-articles__card-content {
  transition: all 0.3s ease;
  transform: translateY(100%);
  height: 60%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('/card_content.png');
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 100%;
}
.latest-articles__name {
  padding: 0 24px;
  font-size: 10px;
  line-height: 18px;
  letter-spacing: -0.15625px;
  margin: 80px 0 0 0;
  color: var(--main-text-grey-color);
}
.latest-articles__card-title {
  margin: 0;
}
.latest-articles__card-title a {
  padding: 0 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.285714px;
  color: #30c88f;
  margin: 0;
}
.latest-articles__card-title a:hover {
  color: #fff;
}
.latest-articles__text {
  padding: 0 24px;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.203125px;
  color: var(--main-text-grey-color);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
@media only screen and (max-width: 1100px) {
  .latest-articles__list-item img {
    width: 100%;
  }
  .latest-articles__list-item:not(:last-child) {
    margin-bottom: 24px;
  }
  .latest-articles__list-item {
    max-width: 327px;
    margin: 0 auto;
    background-color: #fff;
    // border-radius: 5px;
  }
  .latest-articles__name {
    padding: 0 24px;
    font-size: 10px;
    line-height: 18px;
    letter-spacing: -0.15625px;
    color: var(--main-text-grey-color);
  }
  .latest-articles__card-title a {
    padding: 0 24px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.285714px;
  }
  .latest-articles__card-title a:hover {
    color: #30c88f;
  }
  .latest-articles__text {
    padding: 0 24px;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.203125px;
    color: var(--main-text-grey-color);
  }
}
@media only screen and (max-width: 613px) {
  .latest-articles__list-item img {
    width: 100%;
  }
  .latest-articles__list-item:not(:last-child) {
    margin-bottom: 24px;
  }
  .latest-articles__list-item {
    max-width: 327px;
    margin: 0 auto;
    background-color: #fff;
    // border-radius: 5px;
  }
  .latest-articles__name {
    padding: 0 24px;
    font-size: 10px;
    line-height: 18px;
    letter-spacing: -0.15625px;
    color: var(--main-text-grey-color);
  }
  .latest-articles__card-title a {
    padding: 0 24px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.285714px;
  }
  .latest-articles__card-title a:hover {
    color: #30c88f;
  }
  .latest-articles__text {
    padding: 0 24px;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.203125px;
    color: var(--main-text-grey-color);
  }
}
</style>
