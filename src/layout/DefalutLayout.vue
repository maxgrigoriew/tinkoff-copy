
<script lang='ts'>
import isHeaderTop from '@/components/isHeaderTop.vue';
export default {
  component: {
    name: 'DefalutLayout'
  },
  components: {
    isHeaderTop
  }
}

</script>
<template>
  <is-header-top />
  <main class="main">
    <v-container>
      <slot />
    </v-container>
  </main>
</template>

<style lang='scss'>
.main {
  background: #f6f7f8;
  min-height: 100vh;
}
</style>