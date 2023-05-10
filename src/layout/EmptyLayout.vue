
<script lang='ts'>
export default {
  component: {
    name: 'DefalutLayout'
  },
}

</script>
<template>
  <div class="constainer">
    <is-header-top />
    <div>Пустой лайоут</div>
    <slot />
  </div>
</template>
