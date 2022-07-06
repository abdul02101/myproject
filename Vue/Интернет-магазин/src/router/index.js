import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import ProductPage from '@/pages/ProductPage.vue';
import CartPage from '@/pages/CartPage.vue';
import OrderPage from '@/pages/OrderPage.vue';
import OrderInfoPage from '@/pages/OrderInfoPage';

Vue.use(VueRouter);
// В свойстве name хранится ключевое название страницы
// В component передаём экземпляр какого то компонента который будет
// отрисовываться когда эта страница будет активна
// В path указывается путь в адресной строке, так как страница лавная указываем "/".
// если указать * вью роует проверяет все пути в масиве,
// если не один не совпадет перенаправит на страницу
// NotFound
// Так же нужно следить за ирархией моршрутов От самого главного как самому не главному
const routes = [
  { name: 'main', component: MainPage, path: '/' },
  { name: 'product', component: ProductPage, path: '/product/:id' },
  { name: 'cart', component: CartPage, path: '/cart' },
  { name: 'order', component: OrderPage, path: '/order' },
  { name: 'orderInfo', component: OrderInfoPage, path: '/order/:id' },
  { name: 'notFound', component: NotFoundPage, path: '*' },
];
const router = new VueRouter({
  routes,
});
export default router;
