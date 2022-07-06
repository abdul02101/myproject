<template>
  <li class="catalog__item" >
    <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}">
      <img :src="product.image" :alt="product.title">
    </router-link>

    <h3 class="catalog__title">
      <a href="#">
        {{product.title}}
      </a>
    </h3>

    <span class="catalog__price">
      {{product.price | numberFormat}}
    </span>

    <ul class="colors colors--black">
      <li class="colors__item">
        <!-- <label class="colors__label">
          <input class="colors__radio sr-only" type="radio"
                 value="#939393" v-model="color">
          <span class="colors__value" style="background-color: #939393;">
          </span>
        </label> -->
      </li>
      <li class="colors__item">
        <!-- <label class="colors__label">
          <input class="colors__radio sr-only" type="radio"
                 value="#FF6B00" v-model="color">
          <span class="colors__value" style="background-color: #FF6B00;">
          </span>
        </label> -->
      </li>
      <li class="colors__item">
        <!-- <label class="colors__label">
          <input class="colors__radio sr-only" type="radio"
                 value="#222" v-model="color">
          <span class="colors__value" style="background-color: #222;">
          </span>
        </label> -->
      </li>

    </ul>
  </li>
</template>

<script>
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormst';

export default {
  data() {
    return {
      color: '#939393',
    };
  },
  filters: {
    numberFormat,
  },
  methods: {
    gotoPage,
  },
  props: ['product'],
};
</script>
