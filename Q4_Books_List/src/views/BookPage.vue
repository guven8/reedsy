<template>
  <div class="book-page-container">
    <div class="error">{{ error }}</div>
    <div class="nav">
      <router-link to="/">
        <div>
          <img src="../assets/go-back.png" alt="go back" class="back-arrow" />
        </div>
      </router-link>
    </div>
    <div class="title-upvote">
      <h1 class="title">{{book.title}}</h1>
      <UpvoteButton :upvotes="book.upvotes" flexDirection="row-reverse" />
    </div>
    <div class="author">{{ book.author }}</div>
    <div class="rating">Rating: {{ book.rating }}</div>
    <img class="cover" :src="book.cover" :alt="book.title" />
    <div class="desc">
      <h4>Synopsis</h4>
      <p class="synopsis">{{ book.synopsis }}</p>
    </div>
  </div>
</template>

<script>
import UpvoteButton from "@/components/UpvoteButton";

export default {
  name: "book-page",
  components: {
    UpvoteButton
  },
  data() {
    return {
      book: {},
      error: null
    };
  },
  mounted() {
    this.$http
      .get(`http://localhost:3000/books/${this.$route.params.slug}`)
      .then(
        response => {
          this.book = response.body;
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

.book-page-container {
  margin: 0 auto;
  max-width: 900px;
  position: relative;
  background: $color-background;
  padding: 20px 20px 40px;
  box-shadow: 0px 3px 20px -6px rgba(0, 0, 0, 0.4);
  color: $color-text-primary;
  .error {
    color: red;
  }
  .nav {
    padding-bottom: 30px;
    position: relative;
  }
  .back-arrow {
    width: 25px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .title {
    color: darken($color-amber, 10%);
  }
  .author {
    text-align: left;
    font-style: italic;
    margin-top: 10px;
  }
  .rating {
    font-weight: bold;
    text-align: left;
    margin-top: 10px;
    color: $color-text-secondary;
  }
  .cover {
    box-shadow: 0px 1px 9px 2px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin: 30px 0;
  }
  .title-upvote {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .desc {
    text-align: left;
  }
  .synopsis {
    line-height: 26px;
  }
}
</style>
