<template>
  <q-page>
    <section class="hero">
      <div class="container">
        <div class="banner">
          <div class="banner__card card">
            <h1 class="card__title">🌙 DreamWallpapers – Style Your Screen, Elevate Your Vibe</h1>
            <p class="card__text">
              📱 Explore stunning wallpapers, from dreamy aesthetics to bold designs. ✨ Refresh
              your screen with our trendsetting collections today!
            </p>
            <a href="#" class="btn">Request Invite</a>
          </div>
          <div class="banner__img">
            <img
              src="../../public/hero-phones-desktop.png"
              width="729"
              height="900"
              alt="four phone"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="intro">
      <div class="container">
        <CardsList />
      </div>
    </section>
    <section>
      <div class="container">
        <CategoriesList />
      </div>
    </section>
  </q-page>
</template>

<script setup>
import CardsList from 'src/components/Cards/CardsList.vue'
import CategoriesList from 'src/components/Categories/CategoriesList.vue'
</script>
<style scoped lang="scss">
.hero {
  background-image: url('../../public/hero-bg-desktop.png');
  background-repeat: no-repeat;
  background-position: calc(50% + 583px) calc(-100% + -480px);
}
.banner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 250px 0 170px 0;
  position: relative;
}
.banner__card {
  width: 447px;
}
.card__title {
  font-weight: 100;
  font-size: 47px;
  line-height: 64px;
  letter-spacing: -1px;
  color: var(--main-text-dark-blue-color);
  margin: 0;
}
.card__text {
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.28125px;
  color: var(--main-text-grey-color);
  margin: 24px 0 36px 0;
}
.banner__img {
  position: absolute;
  right: -278px;
  top: -40px;
}

.intro {
  background-color: #f4f5f7;
  padding: 95px 0;
}

@media only screen and (max-width: 1500px) {
  .banner__img {
    right: 0px;
  }
  .banner__img img {
    max-width: 527px;
    height: 702px;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 1100px) {
  .hero {
    background-image: url('../../public/mobil-hero-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: calc(50% + 275px) calc(50% - 282px);
  }
  .banner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 250px 0 88px 0;
    position: relative;
  }
  .banner__card {
    margin: 280px auto 0 auto;
    max-width: 327px;
    text-align: center;
  }
  .card__title {
    font-weight: 100;
    font-size: 40px;
    line-height: 47px;
  }
  .card__text {
    font-size: 15px;
    line-height: 25px;
    letter-spacing: -0.234375px;
  }
  .banner__card .btn {
    display: inline-block;
  }
  .banner__img {
    position: absolute;
    right: 0;
    left: 0;
    top: -150px;
  }

  .intro {
    background-color: #f4f5f7;
    padding: 64px 0;
  }
}
@media only screen and (max-width: 613px) {
  .hero {
    background-image: url('../../public/mobil-hero-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: calc(50% + 275px) calc(50% - 282px);
  }
  .banner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 250px 0 88px 0;
    position: relative;
  }
  .banner__card {
    margin: 180px auto 0 auto;
    max-width: 327px;
    text-align: center;
  }
  .card__title {
    font-weight: 100;
    font-size: 35px;
    line-height: 47px;
  }
  .card__text {
    font-size: 15px;
    line-height: 25px;
    letter-spacing: -0.234375px;
  }
  .banner__card .btn {
    display: inline-block;
  }
  .banner__img {
    position: absolute;
    right: 0;
    left: 0;
    top: -55px;
  }
  .banner__img img {
    max-width: 327px;
    height: 402px;
    margin: 0 auto;
  }

  .intro {
    background-color: #f4f5f7;
    padding: 64px 0;
  }
}
</style>
