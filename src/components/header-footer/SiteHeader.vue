<template>
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="./index.html" class="header-inner__logo">
          <img src="../../assets/logo.svg" alt="aesybank-logo" />
        </a>
        <nav class="nav">
          <ul class="list">
            <li class="list-item">
              <a href="#" class="list-link">Home</a>
            </li>
            <li class="list-item">
              <a href="#" class="list-link">About</a>
            </li>
            <li class="list-item">
              <a href="#" class="list-link">Contact</a>
            </li>
            <li class="list-item">
              <a href="#" class="list-link">Blog</a>
            </li>
            <li class="list-item">
              <a href="#" class="list-link">Careers</a>
            </li>
          </ul>
        </nav>
        <a href="#" class="btn">Request Invite</a>
        <button type="button" class="btn-menu"></button>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped lang="scss">
.site-header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 11;
  width: 100%;
  background-color: var(--main-text-white-color);
}
.header-inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.list {
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0;
  padding: 0;
}
.list-item {
  padding: 0 15px;
}
.list-link {
  position: relative;
  padding: 32px 0;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.107692px;
  color: var(--main-text-grey-color);
  transition: all 0.3s ease;
}
.list-link::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 4px;
  transition: all 0.3s ease;
}
.list-link:hover {
  color: var(--main-text-dark-blue-color);
  transition: all 0.3s ease;
}
.list-link:hover::before {
  transition: all 0.3s ease;
  background-image: var(--main-btn-grodient-color);
  width: 100%;
}
.btn-menu {
  display: none;
}
@media only screen and (max-width: 1100px) {
  .header-inner--active .nav {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #2d314d 0%, rgba(45, 49, 77, 0.0001) 100%);
  }
  .header-inner--active .list {
    padding: 32px;
    display: block;
    text-align: center;
    margin: 24px auto;
    max-width: 327px;
    background-color: #fff;
  }
  .header-inner--active .list-link {
    padding: 0;
  }
  .header-inner--active .list-item:not(:last-child) {
    margin-bottom: 24px;
  }

  .site-header {
    position: relative;

    max-width: 100%;
  }
  .header-inner {
    padding: 22px 0;
  }
  .btn-menu {
    display: block;
    background-color: #fff;
    border: none;
    background-image: url(../../assets/toggler-open.svg);
    background-repeat: no-repeat;
    background-position: center;
    width: 24px;
    height: 19px;
  }
  .header-inner--active .btn-menu {
    background-image: url(../../assets/toggler-close.svg);
  }
  .list {
    list-style: none;
    display: none;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  .list-item {
    padding: 0 15px;
  }
  .list-link {
    position: relative;
    padding: 32px 0;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.107692px;
    color: var(--main-text-grey-color);
  }
  .list-link::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 4px;
    transition: all 0.3s ease;
  }
  .list-link:hover {
    color: var(--main-text-dark-blue-color);
  }
  .list-link:hover::before {
    background-image: var(--main-btn-grodient-color);
    width: 100%;
  }
}

@media only screen and (max-width: 613px) {
  .site-header {
    max-width: 100%;
  }
  .header-inner {
    padding: 22px 0;
  }
  .btn-menu {
    display: block;
  }
  .list {
    list-style: none;
    display: none;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  .list-item {
    padding: 0 15px;
  }
  .list-link {
    position: relative;
    padding: 32px 0;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.107692px;
    color: var(--main-text-grey-color);
  }
  .list-link::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 4px;
    transition: all 0.3s ease;
  }
  .list-link:hover {
    color: var(--main-text-dark-blue-color);
  }
  .list-link:hover::before {
    background-image: var(--main-btn-grodient-color);
    width: 100%;
  }
  .btn {
    display: none;
    padding: 8px 34px;
    border-radius: 22px;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
    color: var(--main-text-white-color);
    text-align: center;
    background-image: var(--main-btn-grodient-color);
  }
  .btn:hover {
    opacity: 0.4;
  }
}
</style>
