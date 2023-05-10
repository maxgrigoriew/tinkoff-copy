
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
  <slot />
</template>
