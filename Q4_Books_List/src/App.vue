<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "styles/_variables";
body {
  background: $color-background;
}
body,
h1 {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-text-primary;
}
</style>
