<template>
  <div class="books-list-container">
    <div class="heading">
      <h1>Top Books of all time</h1>
    </div>
    <BooksList :booksList="booksList" />
  </div>
</template>

<script>
import BooksList from "@/components/BooksList";

export default {
  name: "BooksListPage",
  components: {
    BooksList
  },
  data() {
    return {
      booksList: [],
      error: null
    };
  },
  mounted() {
    this.$http.get("http://localhost:3000/books").then(
      response => {
        this.booksList = response.body.books.sort(
          (a, b) => b.upvotes - a.upvotes
        );
      },
      response => {
        this.error = "Error backend down?";
      }
    );
  }
};
</script>

<style scoped lang="scss">
@import "../styles/variables";

.books-list-container {
  margin: 0 auto;
  max-width: 900px;
  box-shadow: 0px 3px 20px -6px rgba(0, 0, 0, 0.4);
  .heading {
    background: $color-background;
    padding: 25px 0 5px;
    color: $color-amber;
  }
  .books-list {
    list-style-type: none;
    margin: 20px 0 0;
    padding: 0;
  }
}
</style>
