import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { API_BASE_URL } from '@/config';
// Сообщаем что будет использовать Вуекс
Vue.use(Vuex);

// Создаём хранилище и экспортируем и импортируем в main.js
// к Vuex можно обратиться с любого компоненты не используя шину используя $store
export default new Vuex.Store({
  state: {
    cartProducts: [],
    userAccessKey: null,

    cartProductsData: [],

    orderInfo: null,
  },
  // Используется для изменения состояния в VUEX мутация
  // первый аргумент это объект состояния, второй это какая либо информация которая будет
  // передоваться при выозове этой мутации
  // чтобы вызвать мутацию this.$store.commit('addProductToCart', {productId: this.product.id, amount: this.productAmount})
  // 1 аргуемент это название мутации а второй это данные которые мы хотим передать
  mutations: {
    updateOrderInfo(state, orderInfo) {
      state.orderInfo = orderInfo;
    },
    resetCart(state) {
      state.cartProducts = [];
      state.cartProductsData = [];
    },
    updateCartProductAmpount(state, { productId, amount }) {
      const item = state.cartProducts.find((item) => item.productId === productId);

      if (item) {
        item.amount = amount;
      }
    },
    deleteCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter((item) => item.productId !== productId);
    },
    updateUserAccessKey(state, accessKey) {
      state.userAccessKey = accessKey;
    },
    updateCartProductsData(state, items) {
      state.cartProductsData = items;
    },
    syncCartProducts(state) {
      state.cartProducts = state.cartProductsData.map((item) => ({
        productId: item.product.id,
        amount: item.quantity,
      }));
    },
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => {
        const { product } = state.cartProductsData.find((p) => p.product.id === item.productId);
        return {
          ...item,
          product: {
            ...product,
            image: product.image.file.url,
          },
        };
      });
    },
    // Второй аргумент получает все гетеры в глобальном хранилище
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts.reduce((acc, item) => (item.product.price * item.amount) + acc, 0);
    },
    orderDetail(state) {
      return state.orderInfo;
    }
  },
  actions: {
    loadOrderInfo(context, orderId){
      return axios
        .get(`${API_BASE_URL}/api/orders/${orderId}`, {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
        })
        .then(response => {
          context.commit('updateOrderInfo', response.data)
        })
    },
    loadCart(context) {
      return axios
        .get(`${API_BASE_URL}/api/baskets`, {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
        })
        .then((response) => {
          if (!context.state.userAccessKey) {
            localStorage.setItem('userAccessKey', response.data.user.accessKey);
            context.commit('updateUserAccessKey', response.data.user.accessKey);
          }

          context.commit('updateCartProductsData', response.data.items);
          context.commit('syncCartProducts');
        });
    },
    addProductToCart(context, { productId, amount }) {
      return (new Promise((resolve) => setTimeout(resolve, 2000)))
        .then(() => axios
          .post(`${API_BASE_URL}/api/baskets/products`, {
            productId,
            quantity: amount,
          }, {
            params: {
              userAccessKey: context.state.userAccessKey,
            },
          })
          .then((response) => {
            context.commit('updateCartProductsData', response.data.items);
            context.commit('syncCartProducts');
          }));
    },
    updateCartProductAmpount(context, { productId, amount }) {
      context.commit('updateCartProductAmpount', { productId, amount });
      if (amount < 1) {
        return;
      }
      return axios
        .put(`${API_BASE_URL}/api/baskets/products`, {
          productId,
          quantity: amount,
        }, {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
        })
        .then((response) => {
          context.commit('updateCartProductsData', response.data.items);
        })
        .catch(() => {
          context.commit('syncCartProducts');
        });
    },
  },
});
