<template>
  <section :class="$style.section">
    <h1 :class="$style.header">Ой =(</h1>
    <nuxt-link to="/">На главную</nuxt-link>
  </section>
</template>

<style lang="scss" module>
  .section {
    width: 600px;
    margin: 0 auto;
    padding-top: 5rem;
  }

  .header {
    color: red;
  }
</style>