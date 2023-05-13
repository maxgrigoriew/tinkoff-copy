<script setup lang="ts">
import isCard from '@/components/isCard.vue';

const businessIconst = [
  {
    title: 'Расчетный счет',
    link: '/',
    icon: 'mdi-domain'
  },
  {
    title: 'Регистрация бизнеса',
    link: '/',
    icon: 'mdi-home'
  },
  {
    title: 'Кредиты',
    link: '/',
    icon: 'settings'
  },
  {
    title: 'Прием платежей',
    link: '/',
    icon: 'mdi-domain'
  },
  {
    title: 'Бухгалтерия',
    link: '/',
    icon: 'mdi-domain'
  },
  {
    title: 'Отраслевые решения',
    link: '/',
    icon: 'mdi-domain'
  },
  {
    title: 'Госзакупки',
    link: '/',
    icon: 'mdi-domain'
  },
  {
    title: 'Валютный счет',
    link: '/',
    icon: 'mdi-domain'
  },
  {
    title: 'Депозиты и овернайты',
    link: '/',
    icon: 'mdi-domain'
  },

]
</script>

<template>
  <section class="pt-10">
    <h2 class="text-h3 font-weight-bold mb-6 text-center">Онлайн-банк для малого бизнеса</h2>
    <p class="text-center mb-10">Без очередей и ожидания на линии. Удобное приложение и личный кабинет. Поддержка 24/7 в чате</p>
    <div class="text-center mb-10">
      <v-btn
        class='px-6 py-6 d-inline-flex'
        color='yellow'
        depressed='false'
      >Открыть счет</v-btn>
    </div>

    <img
      class="mb-10"
      src="@/assets/images/business-cart.png"
      alt="business-cart"
    >
    <ul class="bg-white rounded-lg py-6 px-10 d-flex justify-space-between">
      <li
        class="text-center px-1"
        v-for="item in businessIconst"
        :key="item.title"
      >
        <router-link to="/">
          <v-icon
            class="mb-2"
            large
            color="gray"
          >
            {{ item.icon }}
          </v-icon>
          <p>{{ item.title }}</p>
        </router-link>

      </li>
    </ul>
  </section>

  <section class="pt-10 mb-10">
    <h2 class="text-h3 font-weight-bold mb-10 text-center">Начните бизнес не выходя из дома</h2>
    <p class="text-center mb-10">Заполним заявления, отправим в налоговую и пришлем на почту готовые документы</p>
    <ul class="row card-list">
      <is-card class="col" />
      <is-card class="col" />
      </ul>
  </section>

  <div class="bg-white rounded-lg py-6 px-10 mb-10 d-flex justify-space-between align-center">
    <h3>Расскажите о вашем бизнесе</h3>
    <v-btn
      class='px-6 py-6 d-inline-flex'
      color='white'
      depressed='false'
      outlined
    >Пройти опрос за 1 минуту</v-btn>
  </div>

  <section class="pt-10 mb-10">
    <h2 class="text-h3 font-weight-bold mb-10 text-center">Тарифы на обслуживание счета</h2>
    <p class="text-center mb-10">Открытие любого количества счетов в рублях и валюте — бесплатно</p>
    <ul class="row card-list">
      <is-card class="col"/>
      <is-card class="col"/>
      <is-card class="col"/>
    </ul>
  </section>

  <section class="pt-10 mb-10">
    <h2 class="text-h3 font-weight-bold mb-10 text-center">Сдавайте отчетность без поездок  в налоговую</h2>
    <p class="text-center mb-10">Открытие любого количества счетов в рублях и валюте — бесплатно</p>
    <ul class="row card-list">
      <is-card class="col"/>
    </ul>
  </section>
</template>

<style lang='scss'>
.card-list {
  gap: 3rem;
}
</style>
