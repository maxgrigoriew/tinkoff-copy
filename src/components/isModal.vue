<script setup lang="ts">
import { ref } from 'vue'

const isOpenModal = ref(true)

const open = () => isOpenModal.value = true
const close = () => isOpenModal.value = false

</script>

<template>
  <div class="modal" v-if="isOpenModal">
    <button class="modal__close">
      <v-icon>
        mdi-close
      </v-icon>
    </button>
    <div class="modal__inner">
      <p class="modal__title">Вход в Тинькофф</p>
      <form class="modal__form">
        <input
          type="text"
          class='modal__input input d-inline-flex'
          placeholder="Телефон"
        >
        <v-btn
          class='px-6 py-6 d-inline-flex'
          color='yellow'
          depressed='false'
        >Войти</v-btn>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &__close {
    position: absolute;
    right: 20px;
    top: 20px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #ecf1f7;
    padding: 0;
  }
  &__inner {
    box-shadow: red;
    border-radius: 20px;
    padding: 50px;
    background: #fff;
    box-shadow: 0 4px 24px rgb(0 0 0 / 12%);
  }
  &__title {
    margin-bottom: 30px;
    font-size: 28px;
  }
  &__form {
    display: flex;
  }
  &__input {
    margin-right: 10px;
    border: 2px solid transparent;
    background: #ecf1f7;
    border-radius: 5px;
    padding: 0 10px;
  }
}
</style>