import Vue from 'vue';
import Router from 'vue-router';
import BooksListPage from '@/views/BooksListPage';
import BookPage from '@/views/BookPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'books-list',
      component: BooksListPage
    },
    {
      path: '/book-page/:slug',
      name: 'book-page',
      component: BookPage
    }
  ]
});
