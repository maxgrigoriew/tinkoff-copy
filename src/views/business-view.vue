<script setup lang="ts">
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

  <section class="pt-10">
    <h2 class="text-h3 font-weight-bold mb-10 text-center">Начните бизнес не выходя из дома</h2>
    <p class="text-center mb-10">Заполним заявления, отправим в налоговую и пришлем на почту готовые документы</p>
    <ul class="d-flex">
      <li
        class="px-6 py-6 text-center d-flex flex-column bg-white rounded-lg "
        style="height: 300px; background-color: #a5afbe;"
      >
        <p class="mb-3">Регистрация ИП</p>
        <p>Без доверенностей, нотариусов и госпошлин</p>
        <v-btn
          class="mt-auto"
          color='white'
          depressed='false'
        >Открыть ИП</v-btn>
      </li>
    </ul>
  </section>
</template>

