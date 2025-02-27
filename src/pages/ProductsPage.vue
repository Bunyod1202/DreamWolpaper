<template>
  <div class="products-page">
    <div class="container">
      <h2 class="title">Products</h2>
      <div class="products_wrapper">
        <div class="products_filter">
          <h3 class="products_filter__title">Filters</h3>
          <q-slider
            v-model="priceModel"
            color="green"
            :inner-min="1"
            :inner-max="4"
            markers
            :marker-labels="arrayMarkerLabel"
            switch-marker-labels-side
            :min="1"
            :max="4"
          />
          <q-select
            class="categories-select"
            rounded
            outlined
            v-model="model"
            :options="options"
            label="Categories"
          />
          <div class="btn-group">
            <q-btn @click="reset()" class="btn" rounded label="Reset" />
          </div>

          <div class="order">
            <p class="order__title">Order by</p>
            <ul class="order__list">
              <li class="order__item" v-for="item in order" :key="item">
                <img :src="item.image" width="40" alt="" />
                <div class="order__info">
                  <p class="order__name">{{ item.name }}</p>
                  <p class="order__price">{{ item.price }}$</p>
                </div>
              </li>
            </ul>
            <!-- {{ order }} -->
            <div class="cart-wrapper">
              <p class="total-price">total: {{ totalPrice }}</p>
              <q-btn @click="buyNow()" class="btn" rounded label="buy now" />
            </div>
          </div>
        </div>
        <div v-if="products.length" class="products_list">
          <CardItem v-for="item in products" :key="item" :order="order" :product="item" />
        </div>
        <div v-else class="products_not-found">
          <img src="/productnotfound.png" alt="" />
          <h2 class="products_not-found__title">No products found</h2>
          <p class="products_not-found__text">
            Sorry, we couldn't find any products that match your search criteria.
          </p>
        </div>
      </div>
    </div>
    <!-- <CardsList /> -->
  </div>
</template>

<script setup>
// import CardsList from 'src/components/Cards/CardsList.vue'
import CardItem from 'src/components/Cards/CardItem.vue'
import Categories from 'src/db/CategoryList.json'
import { onMounted, ref, watch } from 'vue'
import { useCounterStore } from 'stores/counter'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const router = useRouter()
const counterStore = useCounterStore()
const { order, totalPrice } = storeToRefs(counterStore)
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
const databaseUrl = 'https://buyld-7ddad-default-rtdb.firebaseio.com/products'
const products = ref([])
const data = ref([])

const priceModel = ref(4)
const model = ref()

const options = Categories.map((item) => {
  return {
    value: item.category_id,
    label: item.category_name,
  }
})
watch(priceModel, () => {
  scrollToTop()
  if (priceModel.value == 4) {
    products.value = data.value
    return
  }
  products.value = data.value.filter((item) => item.price == priceModel.value)
})
watch(model, () => {
  scrollToTop()
  products.value = data.value.filter((item) => item.category.id == model.value?.value)
})
watch(data, () => {
  scrollToTop()
  products.value = data.value
})

const reset = () => {
  scrollToTop()
  priceModel.value = 4
  model.value = null
  setTimeout(() => {
    products.value = data.value
  }, 10)
}
const arrayMarkerLabel = [
  { value: 1, label: '$1' },
  { value: 2, label: '$2' },
  { value: 3, label: '$3' },
  { value: 4, label: 'All' },
]

const fetchUsers = async () => {
  try {
    const response = await fetch(`${databaseUrl}.json`)
    const res = await response.json()

    if (res) {
      data.value = res['-OJCvqtLAjR6VCSqU3I4']
    }
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

function buyNow() {
  console.log('buy now')
  router.push('/buy')
}

onMounted(fetchUsers)
</script>

<style lang="scss" scoped>
.products-page {
  padding: 70px 0;
  .products-page {
    padding: 70px 0;
  }
  .title {
    text-align: center;
  }
  .products_wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .products_filter {
    margin-right: 20px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    position: sticky;
    top: 95px;
    z-index: 1;
    width: 25%;
  }
  .products_list {
    width: 78%;
    list-style: none;
    gap: 40px;
    display: flex;
    flex-wrap: wrap;
  }
  .products_filter__title {
    font-weight: 100;
    font-size: 20px;
    line-height: 44px;
    letter-spacing: -0.714286px;
    text-align: center;
    margin: 0;
    color: #000;
  }
  .categories-select {
    margin: 25px 0;
  }
  .btn-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn {
      font-size: 12px;
      text-align: center;
      display: inline-block;
      padding: 5px 10px;
    }
  }
  .products_not-found {
    text-align: center;
  }
  .products_not-found__title {
    font-weight: 100;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.571429px;
    color: #000;
  }
  .products_not-found__text {
    font-size: 15px;
    line-height: 25px;
    letter-spacing: -0.234375px;
    color: #000;
  }
  .order {
    margin-top: 25px;
    border-top: 1px solid #000;
  }
  .order__title {
    margin-top: 25px;
    font-weight: 100;
    font-size: 20px;
    line-height: 44px;
    letter-spacing: -0.714286px;
    text-align: center;
    margin: 0;
    color: #000;
  }
  .order__list {
    list-style: none;
    padding: 0;
    max-height: 150px;
    overflow-y: auto;
  }
  .order__item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    border-radius: 12px;
    border-bottom: 1px solid #000;
    padding: 5px;
  }
  .order__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .order__name {
    font-weight: 100;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.285714px;
    color: #000;
    margin: 0;
  }
  .order__price {
    text-align: right;

    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.285714px;
    color: #30c88f;
    margin: 0;
  }
}
.cart-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
</style>
