<template>
  <ol class="books-list">
    <li class="book" v-for="(book, index) in booksList" :key="book.slug">
      <router-link :to="'/book-page/' + book.slug">
        <img :src="book.cover" :alt="book.title" class="cover" />
      </router-link>
      <div class="desc">
        <h3 class="title">{{ index + 1 }}. {{ book.title }}</h3>
        <div class="author">{{ book.author }}</div>
        <span class="rating">Rating: {{ book.rating }} / 10</span>
        <p class="synopsis">{{ book.synopsis | truncate(200)}}</p>
        <UpvoteButton :upvotes="book.upvotes" />
      </div>
    </li>
  </ol>
</template>

<script>
import UpvoteButton from "./UpvoteButton";

export default {
  name: "BooksList",
  components: {
    UpvoteButton
  },
  props: {
    booksList: {
      author: String,
      cover: String,
      rating: String,
      slug: String,
      synopsis: String,
      title: String,
      upvoted: Boolean,
      upvotes: Number
    },
    index: Number
  }
};
</script>

<style scoped lang="scss">
@import "../styles/variables";

.book {
  display: flex;
  padding: 25px;
  position: relative;
  &:nth-child(odd) {
    background-color: white;
  }
  &:nth-child(even) {
    background-color: $color-background;
  }
  color: $color-text-primary;
}
.author {
  margin: 0 0 10px;
  font-size: 1.1em;
  font-weight: bold;
}
.title {
  font-size: 1.5em;
  font-weight: bold;
  margin: 0 0 10px;
  color: darken($color-amber, 10%);
}
.rating {
  font-weight: bold;
  color: $color-text-secondary;
}
.desc {
  text-align: left;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
}
.cover {
  box-shadow: 0px 1px 9px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  height: 240px;
}
.synopsis {
  flex: 1;
  line-height: 26px;
}
</style>