<script setup lang="ts">
import DefalutLayout from '@/layout/DefalutLayout.vue'
import { computed, markRaw, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layout = ref()

watch(
  () => route.meta?.layout as string | undefined,
  async (metaLayout) => {
    try {
      const component = await import(`@/layout/${metaLayout}.vue`)
      layout.value = markRaw(component?.default)
    } catch (e) {
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