<template>
  <AppLayout />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLayout from '@/layout/AppLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppLayout,
  }
})
</script>
