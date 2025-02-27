<template>
  <div class="buy-page">
    <div class="container">
      <h2 class="buy-page__title">Billing info</h2>
      <p class="buy-page__text">please enter your billing information below</p>
      <div class="buy-page__wrapper">
        <div class="buy-page__form-wrapper">
          <form action="" class="buy-page__form">
            <label for="name">
              Full name
              <q-input class="buy-page__input" rounded outlined v-model="name" label="FULL NAME" />
            </label>
            <label for="email">
              Email
              <q-input class="buy-page__input" rounded outlined v-model="email" label="EMAIL" />
            </label>
            <label for="phone">
              Phone number
              <q-input
                class="buy-page__input"
                rounded
                outlined
                v-model="phone"
                label="PHONE NUMBER"
              />
            </label>
            <label for="address">
              Address
              <q-input class="buy-page__input" rounded outlined v-model="address" label="ADDRESS" />
            </label>
            <label for="whatsapp">
              Whatsapp or telegram number
              <q-input
                class="buy-page__input"
                rounded
                outlined
                v-model="whatsapp"
                label="WHATSAPP OR TELEGRAM NUMBER"
              />
            </label>
          </form>
          <div class="buy-page__submit">
            <q-btn class="btn" @click="confirmOrder()" rounded label="Complete order" />
          </div>
        </div>
        <div class="buy-page__order">
          <h3 class="order__title">Order summary</h3>
          <p class="order__text">
            We are getting to the end. Just few clicks and your order is ready!
          </p>
          <div class="order__wrapper">
            <ul class="order__list">
              <li class="order__list-item" v-for="item in order" :key="item">
                <img :src="item.image" width="100" alt="" />

                <div class="order__list-item-content">
                  <h5 class="order__list-item-title">{{ item.name }}</h5>
                  <p class="order__list-item-text">{{ item.description }}</p>
                  <p class="order__list-item-price">{{ item.price }}$</p>
                </div>
                <q-btn class="btn" @click="removeItem(item)" rounded label="Remove" />
              </li>
            </ul>
            <div class="order__wrapper-total">
              <p class="order__wrapper-total-title">total order:</p>
              <p class="order__wrapper-total-price">{{ totalPrice }}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from 'stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { order, totalPrice } = storeToRefs(counterStore)
const name = ref('')
const email = ref('')
const phone = ref('')
const address = ref('')
const whatsapp = ref('')

function removeItem(product) {
  if (counterStore.order.find((item) => item.id === product.id)) {
    counterStore.decrement(product)
    return
  }
}
async function confirmOrder() {
  if (
    name.value &&
    email.value &&
    phone.value &&
    address.value &&
    whatsapp.value &&
    counterStore.order.length
  ) {
    const botToken = '7076106039:AAEXOG9hym5xUDhCeNkrJqr0PHbnEVYA7-4'
    // const url = `https://api.telegram.org/bot${botToken}/sendMessage`
    // const response = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     chat_id: 812851381,
    //     text: `Message: ${message.value}\n\nProduct Name: ${productName.value}\n\nProduct Price: ${productPrice.value}`,
    //     photo: 'https://example.com/image.jpg',
    //     caption: 'dwfwefwefwefwefew',
    //   }),
    // })
    const media = counterStore.order.map((photo) => ({
      type: 'photo',
      media: photo.image,
      caption:
        counterStore.order.indexOf(photo) === 0
          ? `Name: ${name.value}\n\nEmail: ${email.value}\n\nPhone: ${phone.value}\n\nAddress: ${address.value}\n\nWhatsapp: ${whatsapp.value}\n\nOrder: ${counterStore.order.map((item) => item.id).join(', ')}`
          : undefined, // Faqat birinchi rasmga caption qo'shish
    }))
    const photo = await fetch(`https://api.telegram.org/bot${botToken}/sendMediaGroup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: 812851381,
        media: media,
      }),
    })
    console.log(photo)

    counterStore.order = []
    return
  }
  if (!name.value) {
    return
  }
  if (!email.value) {
    return
  }
  if (!phone.value) {
    return
  }
  if (!address.value) {
    return
  }
  if (!whatsapp.value) {
    return
  }
}
</script>

<style lang="scss" scoped>
.buy-page {
  padding: 70px 0;
}
.buy-page__title {
  font-size: 36px;
  font-weight: 700;
  line-height: 46.08px;
  text-align: center;
  margin: 30px 0;
}
.buy-page__text {
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  margin: 0 0 30px 0;
}
.buy-page__wrapper {
  display: flex;
  justify-content: space-between;
}
.buy-page__form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}
.buy-page__input {
  width: 300px;
}
.buy-page__form-wrapper {
  width: 60%;
  padding: 20px;
}
.buy-page__order {
  width: 40%;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.order__title {
  font-size: 20px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: -0.714286px;
  text-align: center;
  margin: 0;
  color: #000;
}
.order__text {
  margin-bottom: 25px;
}
.order__list {
  list-style: none;
  padding: 0;
}
.order__list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.order__list-item-title {
  margin: 5px 0;
}
.order__list-item-price {
  text-align: right;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.285714px;
  color: #30c88f;
}
.order__wrapper-total {
  border-top: 1px solid #000;
  padding: 20px 0 0 0;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 0;
  &-title {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.285714px;
    color: #000;
  }
  &-price {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.285714px;
    color: #000;
  }
  &-price {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.285714px;
    color: #30c88f;
  }
}
.buy-page__submit {
  margin-top: 30px;
}
</style>
