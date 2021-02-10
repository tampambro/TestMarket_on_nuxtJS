<template>
  <div :class="$style['catalog']">
    <h1 :class="$style['catalog-header']">
      Каталог
    </h1>

    <nav :class="$style['catalog-nav']">

      <nuxt-link v-for="category of categories" :key="category.id" :class="$style['catalog-link']" :active-class="$style['active']" :to="'/categories/' + category.id" no-prefetch>
        {{category.name}}
      </nuxt-link>

    </nav>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" module>
  $mobileWidth: 772px;

  .catalog {
    width: 10.1em;
    @media(max-width: $mobileWidth) {
      position: absolute;
      display: flex;
      width: calc(100% - 6.2%);
    }
  }

  .catalog-header {
    font-size: 32px;
    margin: 1em 0 0.75em;
    @media(max-width: $mobileWidth) {
      font-size: 18px;
    }
  }

  .catalog-nav {
    display: flex;
    flex-direction: column;
    @media(max-width: $mobileWidth) {
      flex-direction: row;
    }
  }

  .catalog-link {
    color: #959DAD;
    text-decoration: none;
    padding-bottom: 1em;
    &:hover {
    color: #59606D;
    cursor: url("~assets/img/svg/cursor.svg"), pointer;
    }
    @media(max-width: $mobileWidth) {
      margin-top: 1.3em;
      margin-left: 1em;
      white-space: wrap;
    }
  }

  .active {
    line-height: 21px;
    text-decoration-line: underline;
    color: #1F1F1F;
  }
</style>