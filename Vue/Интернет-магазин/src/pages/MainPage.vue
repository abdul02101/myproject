<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <ProductFilter :price-from.sync="filterPriceFropm" :price-to.sync="filterPriceTo"
                     :category-id.sync="filterCategoriaId" :color.sync="filterColor"/>
      <section class="catalog">
        <div v-if="productsLoading">Загрузка товаров.....</div>
        <div v-if="productsLoadinFaile">Ошибка загрузка товаров<button @click.prevent="loadProducts">Попробывать еще раз</button></div>
        <ProductList :products="products"/>
        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage"/>
      </section>
    </div>
  </main>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import BasePagination from '@/components/BasePagination.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import axios from 'axios';
import { API_BASE_URL } from '@/config';

export default {
  components: { ProductList, BasePagination, ProductFilter },
  data() {
    return {
      filterPriceFropm: 0,
      filterPriceTo: 0,
      filterCategoriaId: 0,
      filterColor: '',

      page: 1,
      productsPerPage: 3,

      productsData: null,

      productsLoading: false,

      productsLoadinFaile: false,
    };
  },
  computed: {
    products() {
      return this.productsData
        ? this.productsData.items.map((product) => ({
          ...product,
          image: product.image.file.url,
        }))
        : [];
    },
    countProducts() {
      return this.productsData ? this.productsData.pagination.total : 0;
    },
  },

  methods: {
    loadProducts() {
      this.productsLoading = true;
      this.productsLoadinFaile = false;
      clearTimeout(this.loadProductsTimer);
      this.loadProductsTimer = setTimeout(() => {
        axios.get(`${API_BASE_URL}/api/products`, {
          params: {
            page: this.page,
            limit: this.productsPerPage,
            categoryId: this.filterCategoriaId,
            minPrice: this.filterPriceFropm,
            maxPrice: this.filterPriceTo,
          },
        })
          .then((response) => this.productsData = response.data)
          .catch(() => this.productsLoadinFaile = true)
          .then(() => this.productsLoading = false);
      }, 5000);
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
    filterPriceFropm() {
      this.loadProducts();
    },
    filterPriceTo() {
      this.loadProducts();
    },
    filterCategoriaId() {
      this.loadProducts();
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>
