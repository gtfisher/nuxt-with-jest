<template>
  <div class="container">
    <div>
      <Logo />
      <h1>About</h1>
      <Btn label="click me!" />
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue'
import Btn from '@/components/Btn/Btn.vue'

export default {
  components: {
    Btn,
  },
}
</script>
