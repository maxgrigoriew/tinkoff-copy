<template>
  <div class="about">
    <v-text-field
      v-model="firstname"
      :counter="10"
      label="First name"
      required
    ></v-text-field>
  </div>
</template>
<script setup lang='ts'>

const firstname = '123'
</script>
