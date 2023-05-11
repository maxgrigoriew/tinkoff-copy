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
  <v-container class="pa-0">
    <nav class="menu-top">
      <a
        href="#"
        class="menu-top__logo logo"
      >
        <img
          src="@/assets/icons/main-logo.svg"
          alt="logo"
        >
      </a>
      <ul class="menu-top__inner">
        <li
          class="menu-top__item"
          v-for="item in menu"
          :key='item.name'
        >
          <router-link
            :to="item.link"
            class="menu-top__link"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
      <v-button>button</v-button>
    </nav>
  </v-container>

</template>

<style lang='scss'>
.menu-top {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dddfe0;
  &__logo {
    margin-right: 48px;
  }
  &__inner {
    display: flex;
    list-style: none;
  }
  &__item:not(:last-child) {
    margin-right: 24px;
  }
  &__link {
    padding: 20px 0;
    color: rgba(0, 0, 0, 0.6);
    border-bottom: 2px solid transparent;
    &:hover {
      color: rgba(0, 0, 0, 0.8);
      border-bottom: 2px solid #dddfe0;

    }
  }
  &__link:not(:last-child) {
    margin-right: 24px;
  }
}
</style>