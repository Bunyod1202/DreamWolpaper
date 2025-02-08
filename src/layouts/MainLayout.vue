<template>
  <q-layout view="hHh lpR fFf">
    <SiteHeader />

    <q-page-container>
      <router-view />
    </q-page-container>

    <SiteFooter />
  </q-layout>
</template>
<script setup>
import SiteFooter from 'src/components/header-footer/SiteFooter.vue'
import SiteHeader from 'src/components/header-footer/SiteHeader.vue'
</script>
