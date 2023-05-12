<script setup lang='ts'>
import { ref } from 'vue';

const menu = ref([
  {
    name: 'Банк',
    link: '/about'
  },
  {
    name: 'Бизнес',
    link: '/business'
  },
  {
    name: 'Касса',
    link: '/cash'
  }
])
</script>

<template>
  <li class="card">
    <div class="card__inner">
      <img
        class="card__img"
        src="@/assets/images/card-1.png"
      >
      <p class="card__title">Регистрация ИП</p>
      <p class="card__text">Без доверенностей, нотариусов и госпошлин</p>
      <v-btn
        class="mt-auto align-self-center"
        color='white'
        depressed='false'
      >Открыть ИП</v-btn>
    </div>
  </li>
</template>

<style lang='scss'>
.card {
  background-color: #dddfe0 !important;
  border-radius: 20px;
  padding: 30px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
  &__inner {
    height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  &__img {
    position: absolute;
    width: 100%;
    max-height: 250px;
    object-fit: cover;
    z-index: -1;
    bottom: 0;
    min-height: 60px;
  }
  &__title {
    margin-bottom: 1rem;
  }
}
</style>