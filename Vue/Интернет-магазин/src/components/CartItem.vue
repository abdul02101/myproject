<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img :src="item.product.image" width="120" height="120" :alt="item.product.title">
    </div>
    <h3 class="product__title">
      {{item.product.title}}
    </h3>
    <span class="product__code">
      {{item.product.id}}
    </span>

    <div class="product__counter form__counter">
      <button type="button" aria-label="Убрать один товар" @click.prevent="counterBack">
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-minus"></use>
        </svg>
      </button>

      <input type="text" v-model.number="amount" name="count">

      <button type="button" aria-label="Добавить один товар" @click.prevent="counterNext">
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-plus"></use>
        </svg>
      </button>
    </div>

    <b class="product__price">
      {{(item.amount * item.product.price) | numberFormat}}
    </b>

    <button class="product__del button-del" type="button" aria-label="Удалить товар из корзины" @click.prevent="deleteProduct(item.productId)">
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>

<script>
import numberFormat from '@/helpers/numberFormst';
import { mapMutations } from 'vuex';

export default {
  filters: { numberFormat },
  props: ['item'],
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        // Вызов мутации
        this.$store.dispatch('updateCartProductAmpount', { productId: this.item.productId, amount: value });
      },
    },
  },
  methods: {
    // Если хранить в объект можно менять имя deleteProduct
    ...mapMutations({ deleteProduct: 'deleteCartProduct' }),
    counterNext() {
      if (this.amount >= 0) {
        this.amount++;
      }
    },
    counterBack() {
      if (this.amount > 0) {
        this.amount--;
      }
    },

  },
};
</script>
