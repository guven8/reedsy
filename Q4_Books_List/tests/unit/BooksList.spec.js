import Vue from 'vue'
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import BooksList from '@/components/BooksList';
import mockedbooksList from './mockedBooksList';
import VueTruncate from "vue-truncate-filter";
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueTruncate)

describe('BooksListItem', () => {
  it('displays the correct book title', () => {
    const booksList = mockedbooksList.sort((a, b) => b.upvotes - a.upvotes);
    const wrapper = shallowMount(BooksList, {
      propsData: { booksList }
    });
    expect(wrapper.find('h3.title').text()).to.include(booksList[0].title);
  });
  it('displays the correct book author', () => {
    const booksList = mockedbooksList.sort((a, b) => b.upvotes - a.upvotes);
    const wrapper = shallowMount(BooksList, {
      propsData: { booksList }
    });
    expect(wrapper.find('div.author').text()).to.include(booksList[0].author);
  });
  it('truncates synopsis to 200 characters or less', () => {
    const booksList = mockedbooksList.sort((a, b) => b.upvotes - a.upvotes);
    const wrapper = shallowMount(BooksList, {
      propsData: { booksList }
    });
    expect(wrapper.find('p.synopsis').text()).to.have.length.below(201);
  });
});
