<template>
  <div class="latest-articles">
    <h2 class="latest-articles__title">Categories</h2>
    <ul class="latest-articles__list">
      <CategoryItem v-for="item in categoryList" :key="item" :category="item" />
    </ul>
  </div>
</template>

<script setup>
import CategoryItem from 'src/components/Categories/CategoryItem.vue'
import categoryList from 'src/db/CategoryList.json'
</script>

<style lang="scss" scoped>
.latest-articles {
  padding: 80px 0;
}
.latest-articles__title {
  font-weight: 100;
  font-size: 40px;
  line-height: 64px;
  letter-spacing: -0.714286px;
  color: var(--main-text-dark-blue-color);
  margin: 0 0 40px 0;
}
.latest-articles__list {
  gap: 10px;
  flex-wrap: wrap;
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0;
  margin: 40px 0 0 0;
}
@media only screen and (max-width: 1100px) {
  .latest-articles {
    padding: 80px 0;
  }
  .latest-articles__title {
    text-align: center;
  }
  .latest-articles__list {
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0;
    margin: 40px 0 0 0;
    width: 100%;
  }
}
@media only screen and (max-width: 613px) {
  .latest-articles {
    padding: 80px 0;
  }
  .latest-articles__title {
    text-align: center;
    font-size: 30px;
  }
  .latest-articles__list {
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0;
    margin: 40px 0 0 0;
    width: 100%;
  }
}
</style>
