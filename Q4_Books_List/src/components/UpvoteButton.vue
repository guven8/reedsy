<template>
  <div class="upvotes" :style="{ flexDirection: flexDirection || 'row' }">
    <button class="upvote-button" :class="{ upvoted }" v-on:click="toggleUpvote">
      <span v-if="upvoted">Upvoted</span>
      <span v-else>Upvote</span>
    </button>
    <span>Upvoted: {{ upvotes }} times</span>
  </div>
</template>

<script>
export default {
  name: "UpvoteButton",
  props: {
    upvotes: Number,
    flexDirection: String
  },
  data() {
    return {
      upvoted: false
    };
  },
  methods: {
    toggleUpvote() {
      if (this.upvoted) {
        this.upvotes -= 1;
      } else {
        this.upvotes += 1;
      }
      this.upvoted = !this.upvoted;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/variables";

.upvotes {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.upvote-button {
  cursor: pointer;
  background-color: $color-amber;
  box-shadow: none;
  border: none;
  border-radius: 10px;
  padding: 12px 0;
  width: 140px;
  color: white;
  font-weight: bold;
  font-size: 1em;
  outline: none;
  &.upvoted {
    background-color: white;
    box-shadow: 0px 0px 0px 2px $color-amber;
    color: $color-amber;
  }
}
</style>