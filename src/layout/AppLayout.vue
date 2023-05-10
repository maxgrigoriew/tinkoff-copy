<script setup lang="ts">
import DefalutLayout from '@/layout/DefalutLayout.vue'
import { markRaw, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const layout = ref()
const route = useRoute()

watch(
  () => route.meta?.layout as string | undefined,
  async (metaLayout) => {
    try {
      console.log('metaLayout', metaLayout)
      const component = await import(`@/layout/${metaLayout}.vue`)
      layout.value = markRaw(component?.default)
      console.log('true')
    } catch (e) {
      console.log('false')
      layout.value = markRaw(DefalutLayout)
    }
  },
  { immediate: true }
)
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>